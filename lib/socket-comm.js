const EventEmitter = require('events');
const WebSocket = require('ws');
const util = require('util');
const _ = require('underscore');
const querystring = require('querystring');
require('dotenv').config();

const events = require('./event-emitter');
const steamComm = require('./steam-comm');
const greenworks = require('../greenworks');
const  e = new EventEmitter;   //no extends because it's works pretty strange with es6 classes

greenworks.init();
greenworks.getAuthSessionTicket((data) => {
  const ticket = data.ticket.toString('hex').toUpperCase();
  settings = {
      "ticket": ticket,
      "steamId": greenworks.getSteamId(),
      "v": process.env.GAME_CLIENT_VERSION,
      "debug": process.env.DEBUG,
      "port": 3000,
  };
});

class service {  
    constructor(settings) {
        this.settings = settings;
        let server = 'entry.playbattlegrounds.com:81'; //Use /health to check server health  
        let query = { 'provider': 'steam', 'ticket': settings.ticket, 'playerNetId': settings.steamId, 'cc': 'RU', 'clientGameVersion': settings.v };    
        let finalQuery = 'http://' + server + '/userproxy?' + querystring.stringify(query);
        this.ws  =  new  WebSocket(finalQuery);    
        this.counter = 1000000; //Counter to track callbacks from WS server
        this.cbs = {};
        this.ws.on("message", data => {
            try {
                var j = JSON.parse(data);
            } catch (ex) {
                console.log("ERROR DECODING MSG", ex, data);
                var j = [];
            }
            if (j[0] === 0) {
                //Recived initial pkg?
                if(j[5] && j[5].account) {
                  e.emit("init", j[5].account.AccountId, j[4])
                }
                return;
            }
            if (!j[0]) return console.log("Invalidate pkg", data);
            var pkgId = j[0];
            var emitter = j[2];
            var newData = _.clone(j).slice(2);
            if (_.has(this.cbs, pkgId)) {
                this.cbs[pkgId](...newData);
            } else {
                console.log(`Unhandled pkg from ${emitter}`, newData)
            }
            if (this.settings.debug) console.log("INCOME", j);
            e.emit("msg", data);
        });

        this.ws.on('open', function(data,  flags)  {
            // Need a little time to switch protocols and etc..
            setTimeout(function() {
                e.emit("connected");    
            }, 1000);
        });    
        this.ws.on('error',  function  incoming(data,  flags)  {
            e.emit("error", data);    
        });     
        this.ws.on('close',  function  incoming(code, data)  {
            e.emit("error", data);    
        });      //Send ping every 30 sec
            
        setInterval(() => {
            this.sendMessage("Ping");    
        }, 30000); //30 sec. taken from lobby script

        setInterval(() => {
            this.cbs = {};
        }, 60000);  //remove all old callbacks to clean memory
    }
    sendMessage() {
        let arg = [...arguments];
        let newAr = [];
        let cb;
        _.each(arg, ar => {
            if (typeof ar !== "function") newAr.push(ar);
            else cb = ar;
        });
        this.counter++;
        let ourId = _.clone(this.counter);
        if (typeof cb == "function") this.cbs[ourId * -1] = cb;        
        var args = [ourId, null, "UserProxyApi", ...newAr];
        this.ws.send(JSON.stringify(args));
        if (this.settings.debug) console.log("Sending", args);      
    }
};

module.exports = (settings) => {
  let s = new Service(settings);

  e.on("connected", () => {
    app.listen(settings.port, function() {
        console.log(`App listening on port ${settings.port}!`);
    });
    s.sendMessage("Ping");
});

e.on("error", (data) => {
    console.log("Error connecting:", data)
})

e.on("init", (accountId, accountData) => {
    myAccountId = accountId;
    console.log("Logged in as", accountId)
});

e.on("msg", (data) => {
    // console.log(data);
})
}
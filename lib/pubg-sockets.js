const WebSocket = require('ws');
const  _ = require("underscore");
const steamComm = require('./steam-comm');
var e = require('./event-emitter');
let s;
let settings;

// Gets steamId and ticket needed to authenticate with pubg API
steamComm.getAuthTicket()
.then((ticket) => {
    console.log('hi');
    settings = {
        "ticket": ticket,
        "steamId": steamComm.getSteamId(),
        "v": process.env.GAME_CLIENT_VERSION,
        "debug": process.env.DEBUG,
        "port": 3000,
    };
})
.catch((error) => {

});

// Creates service which communicates with PUBG servers
class Service {  
    constructor() {
        this.settings = settings;
        let server = 'entry.playbattlegrounds.com:81'; //Use /health to check server health  
        let query = { 'provider': 'steam', 'ticket': settings.ticket, 'playerNetId': settings.steamId, 'cc': 'RU', 'clientGameVersion': settings.v };    
        let finalQuery = 'http://' + server + '/userproxy?' + this.encodeQueryData(query);
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
    encodeQueryData(data) {    
        let ret = [];    
        for (let d in data) ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));    
        return ret.join('&');  
    }  
};

// takes in game name from PlayerUnknown's Battlegrounds and returns accountid
// accountid is used to make all other calls for data
module.exports.getUserStateByNickname = function(name) {
    return new Promise((resolve, reject) => {
      s.sendMessage("GetBroUserStatesByNickname", [name], function(isSuccess, result) {
        if (!isSuccess) reject(result);
        resolve(result);
      })
    });
};

module.exports.getUserStateByAccountID = function(AccountID) {
    return new Promise((resolve, reject) => {
        s.sendMessage("GetBroUserStatesByAccountId", [AccountID], function(isSuccess, result) {
            if (!isSuccess) reject('error', result);
            var userData = result[0];
            try {
              var accId = userData.AccountId;
              resolve(userData)
            } catch (ex) {
              reject('error', result);
            }
        });
    });
}

// takes pubg accountId, region and gamemode, returns records for them.
module.exports.getRecords = function(pubgID, region, mode) {
    return new Promise((resolve, reject) => {
        s.sendMessage("GetUserRecord", pubgID, region, mode, function(isSuccess, result) {
            if (!isSuccess) return res.send({ success: false, error: 1, data: result })
            // console.log(result);
            if (result.Records != null) {
                res.send({ success: true, stats: result.Records, userData });
            } else {
                res.send({ success: false, ranking: 0 })
            }
        });
    })
};

module.exports.getAllRecords = function(AccountID) {
  return new Promise((resolve, reject) => {
    s.sendMessage("GetUserAllRecord", AccountID, function(isSuccess, result) {
        if (!isSuccess) reject('error', result);
        resolve(result);
    });
  });
};

// takes region, mode, accountID and 'type' examples are 'us', 'solo' and 'Rating'
module.exports.getLeaderboard = function(region, mode, type, accountID) {
  return new Promise((resolve, reject) => {
    s.sendMessage("GetBroLeaderboard", region, mode, type, accountID || "account.59e4ce452ac94e27b02a37ac7a301135", function(isSuccess, result) {
        if (!isSuccess) reject('error', result);
        resolve(result);
    });
  });
};

// Pings the PUBG Api, lobby does this
// possibly keeps connection alive, unsure.
module.exports.ping = function() {
  s.sendMessage("Ping");
}

// Waits until steamAPI has fully filled in settings before starting service
setTimeout(() => {
    module.exports.service = s = new Service()
}, 500);


const EventEmitter = require('events');
const e = new EventEmitter;

e.on("error", (data) => {
    console.log("Error connecting:", data)
})

e.on("init", (accountId, accountData) => {
    console.log("Logged in as", accountId)
})

e.on("msg", (data) => {
  console.log(data);
})
module.exports = e;

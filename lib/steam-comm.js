const greenworks = require('../greenworks');
greenworks.init();

module.exports = {};
module.exports.getSteamId = () => {
  return greenworks.getSteamId().staticAccountId;
};

module.exports.getAuthTicket = () => {
  return new Promise((resolve, reject) => {
    const isSuccess = greenworks.initAPI();
    if ( isSuccess ) {
      greenworks.getAuthSessionTicket((data) => {
        ticket = data.ticket.toString('hex').toUpperCase();
        resolve(ticket);
      }, (err) => {
        reject(err);
      });
    } else {
      reject('no API');
    }
  })
}

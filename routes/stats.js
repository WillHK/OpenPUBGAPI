const express = require('express');
const router = express.Router();
const pubg = require('../lib/pubg-sockets');

router.post('/register', (req, res) => {
  let newUser = req.body;
  let ingameName = newUser.name;
  console.log(req.body);
  pubg.getUserStateByNickname(ingameName)
  .then((userData) => {
    res.send(userData[0]);
  })
});

router.post('/records', (req, res) => {
  let user = req.body;
  pubg.getRecords(user.AccountId, user.region, user.mode)
  .then((records) => {
    console.log(records);
    res.send({records: records});
  });
});

router.post('/allrecords', (req, res) => {
  let user = req.body;
  pubg.getAllRecords(user.AccountId)
  .then((records) => {
    res.send({records: records});
  });
});

router.post('/leaderboard', (req, res) => {
  let user = req.body;
  pubg.getLeaderboard(user.region, user.mode, user.type, user.accountId)
  .then((leaderboard) => {
    res.send({records: leaderboard});
  });
});

module.exports = router;
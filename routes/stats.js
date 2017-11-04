const express = require('express');
const router = express.Router();
const pubg = require('../lib/pubg-sockets');

router.post('/register', (req, res) => {
  let newUser = req.body;
  let ingameName = newUser.name;
  pubg.getUserStateByNickname(ingameName)
  .then((userData) => {
    res.send(userData);
  })
});

router.get('')

module.exports = router;
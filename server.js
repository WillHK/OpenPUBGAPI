const  util = require('util');
const  _ = require("underscore");
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
const pubg = require('./lib/pubg-sockets');
const e = require('./lib/event-emitter');
const stats = require('./routes/stats.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(stats);
e.on("connected", () => {
    app.listen(process.env.PORT || 3000, function() {
        console.log(`App listening on port ${process.env.PORT || 3000}!`);
    });
    pubg.ping();
});



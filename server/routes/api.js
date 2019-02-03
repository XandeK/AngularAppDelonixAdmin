const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
// declare axios for making http requests
const axios = require('axios');
var db;
MongoClient.connect('mongodb://delonix:delonix123@ds119795.mlab.com:19795/delonix', { useNewUrlParser: true }, (err, database) => {
if (err) return console.log(err)
db = database.db('delonix');
});

module.exports = router;
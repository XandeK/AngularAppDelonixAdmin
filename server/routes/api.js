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

router.post('/createProduct/:productImage/:productName/:productCost/:productDesc', (req, res) => {
    db.collection('loyaltyproducts').insertOne({productImage: req.params.productImage, productName: req.params.productName, productCost: req.params.productCost, productDesc: req.params.productDesc}, (err, result) => {
        if (err) 
        return console.log(err);
        // else
        // return res.send('1');
    });
});

router.get('/getAllProducts', function (req, res) {
    db.collection('loyaltyproducts').find({}).toArray((err, results) => { res.send(results) });
});

router.get('/findByName/:productName', function (req, res) {
    db.collection('loyaltyproducts').find({ "productName": req.params.productName }).toArray((err, results) => { res.send(results) });
});



module.exports = router;
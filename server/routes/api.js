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

router.get('/regAdmin/:name/:email/:password/:contact/:role', (req, res) => {
    bcrypt.hash(req.params.password, BCRYPT_SALT_ROUNDS, function (err, hash) {
        db.collection('admin').insertOne({ "name": req.params.name, "email": req.params.email, "password": hash, "contact": req.params.contact, "role": req.params.role }, (err, result) => {
        });

    });
})

router.post('/newRoomRate/:roomName/:roomType/:roomRate', (req, res) => {
    db.collection('roomrate').insertOne({roomName: req.params.roomName, roomType: req.params.roomType, roomRate: req.params.roomRate}, (err, result) => {
        if (err) 
        return console.log(err);
        // else
        // return res.send('1');
    });
});

router.get('/getAllRoomRate', function (req, res) {
    db.collection('roomrate').find({}).toArray((err, results) => { res.send(results) });
});

router.get('/getstaffcecord', function(req, res){
    db.collection('staffrecord').find().toArray( (err, results) =>
   {res.send(results)});
   });

router.route('/deleteRoom/:roomName').delete(function (req, res) {
    db.collection('roomrate').deleteOne({ "roomName": (req.params.roomName) });
    //res.redirect("http://localhost:3000/login");
});


// wang bin functions
router.post('/newstaff/:staffname/:staffaddress/:permitstatus/:mobilenumber/:email/:gender/:bankdetail/:special', (req, res) => {
db.collection('staffrecord').insertOne({

    staffname: req.params.staffname, 
    staffaddress: req.params.staffaddress,
    permitstatus: req.params.permitstatus, 
    mobilenumber: req.params.mobilenumber, 
    email: req.params.email,
    gender: req.params.gender, 
    bankdetail: req.params.bankdetail, 
    special: req.params.special
}, (err, result) => {
    if (err) 
    return console.log(err);
    // else
    // return res.send('1');
});
});

module.exports = router;
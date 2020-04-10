"use strict";

var express = require("express");

var router = express.Router();

var MongoClient = require("mongodb").MongoClient;

var ObjectID = require("mongodb").ObjectID;

var assert = require("assert");

router.get('/', function (req, res, next) {
  res.render('lights', {
    title: 'Lights configuration'
  });
});
router.post("/request-udp", function (req, res, next) {
  console.clear();
  var value = req.body.value.toString();
  var PORT = req.body.port;
  var HOST = req.body.host;

  var dgram = require("dgram");

  var message = new Buffer.from(value);
  var client = dgram.createSocket("udp4");
  client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
    if (err) throw err;
    console.table([{
      label: req.body.label,
      'Driver address': HOST,
      'Driver port': PORT,
      'Driver value': value
    }]);
  });
  res.send("OK");
});
router.post("/delete", function (req, res, next) {
  var id = req.body.id;
  var db = req.app.get("db")();
  db.collection("lights").deleteOne({
    _id: ObjectID(id)
  });
  res.send("OK");
});
router.post("/update", function (req, res, next) {
  var item = {
    label: req.body.label,
    value: req.body.value,
    host: req.body.host,
    port: req.body.port
  };
  var id = req.body.id;
  var db = req.app.get("db")();
  db.collection("lights").updateOne({
    _id: ObjectID(id)
  }, {
    $set: item
  });
  res.send("OK");
});
router.post("/insert", function (req, res, next) {
  var item = {
    label: req.body.label,
    value: req.body.value,
    host: req.body.host,
    port: req.body.port
  };
  var db = req.app.get("db")();
  db.collection("lights").insertOne(item, function (err, result) {
    if (err) return console.log(err);
    console.log("saved to database");
  });
  res.send("OK");
});
router.get("/all", function (req, res, next) {
  console.clear();
  res.setHeader("Content-Type", "application/json");
  var db = req.app.get("db")();
  var data = db.collection("lights").find();
  var resultArray = [];
  data.forEach(function (doc, err) {
    assert.equal(null, err);
    resultArray.push(doc);
  }, function () {
    res.end(JSON.stringify(resultArray));
    console.table(resultArray);
  });
});
module.exports = router;
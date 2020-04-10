const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const assert = require("assert");

router.get('/', function(req, res, next) {
  res.render('lights', { title: 'Lights configuration' });
});

router.post("/request-udp", function (req, res, next) {
  console.clear();
  const value = req.body.value.toString();
  const PORT = req.body.port;
  const HOST = req.body.host;
  
  const dgram = require("dgram");
  
  const message = new Buffer.from(value);
  
  const client = dgram.createSocket("udp4");
  
  client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
    if (err) throw err;
    console.table([{
      label: req.body.label,
      'Driver address': HOST,
      'Driver port': PORT,
      'Driver value': value
    }]
    );
  });
  res.send("OK");
});

router.post("/delete", function (req, res, next) {
  const id = req.body.id;
  const db = req.app.get("db")();

 db.collection("lights").deleteOne({ _id: ObjectID(id) }); 
 res.send("OK");
});

router.post("/update", (req, res, next) => {
  const item = {
    label: req.body.label,
    value: req.body.value,
    host: req.body.host,
    port: req.body.port
  };
  const id = req.body.id;
  const db = req.app.get("db")();

  db.collection("lights").updateOne({ _id: ObjectID(id) }, { $set: item });
  res.send("OK");
});

router.post("/insert", (req, res, next) => {
  const item = {
    label: req.body.label,
    value: req.body.value,
    host: req.body.host,
    port: req.body.port
  };

  const db = req.app.get("db")();

  db.collection("lights").insertOne(item, (err, result) => {
    if (err) return console.log(err);
    console.log("saved to database");
  });
  res.send("OK");
});

router.get("/all", (req, res, next) => {
  console.clear();
  res.setHeader("Content-Type", "application/json");

  const db = req.app.get("db")();
  const data = db.collection("lights").find();

  let resultArray = [];
  data.forEach(
    function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    },
    () => {
      res.end(JSON.stringify(resultArray));
      console.table(resultArray);
    }
  );
});

module.exports = router;

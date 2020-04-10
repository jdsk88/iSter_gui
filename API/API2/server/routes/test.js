var express = require("express");
var router = express.Router();

router.post("/lightsxxxx/insert", function(req, res, next) {

    var item = {
        title: req.body.title,
        content: req.body.content
      };

      console.log('res',body);

    res.setHeader('Content-Type', 'application/json');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.end(JSON.stringify({ a: 1 }));
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('devices', { title: 'iSter devices list from data base ' });
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ a: 1 }));
});

module.exports = router;

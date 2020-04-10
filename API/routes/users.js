var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('users page');
  res.render('users', { title: 'Users APIs ' });

});

module.exports = router;

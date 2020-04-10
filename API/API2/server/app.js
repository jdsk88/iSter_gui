var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var devices = require('./routes/devices');


var lights = require('./routes/lights');

var expressSession = require('express-session');

const db = require("./utils/db");

var app = express();


db.connect(err => {
  if (err) {
      console.log("nie można połączyć z bazą");
      process.exit(1);
  } else {
          console.log("połączono z bazą");
  }
});

app.set('db',db.getDB);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret:'max',saveUninitialized:false,resave:false}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lights', lights);
app.use('/devices', devices);

// app.get('/lights/:id', function (req,res) {
//   lights.findById(req.params.id)
//   .then(lightFound => {
//     if (!lightFound) {return res.status(404).end(); }
//     return res.status(200).json(lightFound);
//   })
//   .catch(err => next(err));
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
console.clear();

module.exports = app;

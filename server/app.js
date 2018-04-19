var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');
var db = require('./db');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.disable('etag');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.all('*', function(req, res, next) {
  //console.log(req.useragent);
  // res.header('Access-Control-Allow-Origin', null);
  //if(req.headers['referer']){
    var origin = req.get('origin');
    res.header('Access-Control-Allow-Origin',  origin);
  // }else{
  //   res.header('Access-Control-Allow-Origin',  null);
  // }
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Cookie');
  res.header('Access-Control-Allow-Credentials', true);
  if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
  //next();
});



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));


console.log("** here >>>");
var AuthController = require('./routes/AuthController');
app.use('/api/v1/auth', AuthController);

var VerifyToken = require("./routes/VerifyToken");
app.all('*', function(req, res, next) {
  console.log("** req.query >>>" + JSON.stringify(req.query));
  VerifyToken(req,res,next)
});

var UserController = require('./routes/UserController');
app.use('/users', UserController);


var generic_route = require('./routes/generic_route');
var arUser = require('./routes/ar_user');
app.use('/api/v1/address', generic_route("address"));
app.use('/api/v1/application', generic_route("application"));
app.use('/api/v1/board', generic_route("board"));
app.use('/api/v1/building', generic_route("building"));
app.use('/api/v1/country', generic_route("country"));
app.use('/api/v1/curriculum', generic_route("curriculum"));
app.use('/api/v1/FAT', generic_route("FAT"));
app.use('/api/v1/floor', generic_route("floor"));
app.use('/api/v1/legal_docs', generic_route("legal_docs"));
app.use('/api/v1/room', generic_route("room"));
app.use('/api/v1/school_class_group', generic_route("school_class_group"));
app.use('/api/v1/school_class', generic_route("school_class"));
app.use('/api/v1/school_day', generic_route("school_day"));
app.use('/api/v1/school_holiday', generic_route("school_holiday"));
app.use('/api/v1/school_language', generic_route("school_language"));
app.use('/api/v1/school_lesson', generic_route("school_lesson"));
app.use('/api/v1/school_term', generic_route("school_term"));
app.use('/api/v1/school_year_curriculum', generic_route("school_year_curriculum"));
app.use('/api/v1/school_year', generic_route("school_year"));
app.use('/api/v1/school', generic_route("school"));
app.use('/api/v1/user', generic_route("user", arUser));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/', index);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;

'use strict';

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var uuid = require('uuid');
var MongoStore = require('connect-mongo')(session);
process.env.SESSION_SECRET || require('dotenv').load();
// require passport
// require passport config file
var passport = require('./lib/passport');
// routes
var routes = require('./routes/index');
var users = require('./routes/users');
var dashboard = require('./routes/dashboard');
var page = require('./routes/page');
var post = require('./routes/post');
var blogRoute = require('./routes/blogRoute');

var cors = require('cors');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//cors configuration
app.use(cors({
  origin: 'http://localhost:5000',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	secret : process.env.SESSION_SECRET,
	resave : false,
	saveUninitialized : false,
	store : new MongoStore({
		url : "mongodb://localhost/mongo-crud"
	}),
	cookie : {
		maxAge : 2000000 // 5 minutes
	},
	genid : function() {
		return uuid.v4({
			rng : uuid.nodeRNG
		});
	}
}));

// mount return value of `passport.initialize` invocation on `app`
app.use(passport.initialize());

// mount return value of `passport.session` invocation on `app`
var blogController = require('./controllers/blogController');

app.use(passport.session());

app.use('/', routes);
app.use('/users', users);
app.use('/dashboard', dashboard);
app.use('/page', page);
app.use('/post', post);
app.use('/:username', blogController.get);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err.stack
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;

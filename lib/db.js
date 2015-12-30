'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/onions');
module.exports = mongoose.connection;

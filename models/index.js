'use strict';

var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.model('User', require('./User'));

mongoose.connect("mongodb://localhost/mongo-crud");

module.exports = mongoose;

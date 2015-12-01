'use strict';

var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.model('User', require('./User'));
mongoose.model('Post', require('./Post'));

mongoose.connect("mongodb://localhost/mongo-crud");

module.exports = mongoose;

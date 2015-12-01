'use strict';

var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.model('User', require('./User'));
mongoose.model('Post', require('./Post'));
mongoose.model('Page', require('./Page'));

mongoose.connect("mongodb://localhost/mongo-crud");

module.exports = mongoose;

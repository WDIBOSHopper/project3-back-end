'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = require("./User.js");

var pageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  user_id: [{ type: String, ref: 'User'}]

});

var Page = mongoose.model('Page', pageSchema);
var User = mongoose.model('User', userSchema);

module.exports = Page;

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

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
    unique : true,
    required: true
  },
  owner: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  posts : [{ type: Schema.Types.ObjectId, ref: 'Post' }]

});

pageSchema.plugin(uniqueValidator);
var Page = mongoose.model('Page', pageSchema);
var User = mongoose.model('User', userSchema);

module.exports = Page;

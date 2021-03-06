'use strict';

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var pageSchema = require('./Page.js');
var userSchema = require('./User.js');
var postSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    default: function(){
      return new Date(Date.now).toLocaleString();
    }
  },
  title: {
    type: String,
    required: true
  },
  entry : {
    type: String,
    required: true
    },
  owner: [{ type: Schema.Types.ObjectId, ref: 'User'}]
 });

postSchema.plugin(uniqueValidator);

var Post = mongoose.model('Post', postSchema);
var Page = mongoose.model('Page', pageSchema);
var User = mongoose.model('User', userSchema);

module.exports = Post;

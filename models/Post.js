'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var pageSchema = require('./Page.js');
var postSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  title: {
    type: String,
    required: true
  },
  entry : {
    type: String,
    required: true
    },
  page: [{ type: Schema.Types.ObjectId, ref: 'Page' }]
 });

var Post = mongoose.model('Post', postSchema);
var Page = mongoose.model('Page', pageSchema);

module.exports = Post;

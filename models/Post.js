'use strict';

var mongoose = require('mongoose');

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
  });

var Post = mongoose.model('Post', postSchema);

module.exports = Post;

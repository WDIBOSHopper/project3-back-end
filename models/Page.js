'use strict';

var mongoose = require('mongoose');

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
  }
});

var Page = mongoose.model('Page', pageSchema);

module.exports = Page;

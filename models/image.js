'use strict';

var mongoose = require('mongoose');
var OwnerId = mongoose.Schema.Types.ObjectId;
// mongoose.connect('mongodb://localhost/file-upload');

var imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  ownerId: {
    type: OwnerId,
    ref: "User"
  }
});

var Image = mongoose.model('Image', imageSchema);

module.exports = Image;

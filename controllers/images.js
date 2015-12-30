'use strict';

var Image = require('../models/image');
var awsUpload = require('../lib/aws-upload');
var User = require('../controllers/auth.js');

var index = function index(req, res, next) {
    Image.find({}, {__v: 0}).exec().then(function(images) {
    res.json(images);
  }).catch(function(error) {
    next(error);
  });
};

var create = function create(req, res, next) {
  awsUpload(req.file.buffer, {path: '/' + req.user.userName + '/' + req.body.name, ownerId: req.user._id, name: req.body.name}).then(function(data){
    req.user.userFiles.push(data._id);
    req.user.save();
    console.log(req.user);
    res.json(data);
  }).catch(function(error) {
    next(error);
  });
};

var update = function update(req, res, next) {
  console.log(req.body.imageid, req.body.newfilename);
  Image.findByIdAndUpdate(req.body.imageid, {$set: {name: req.body.newfilename}}, {new: true}).exec().then(function(image) {
    console.log(image);
    image.save();
  });
};

var destroyOneFromUser = function patch(req, res, next) {
  console.log(req.user.userFiles);

  req.user.userFiles.splice(req.user.userFiles.indexOf(req.body.onefile), 1);
  console.log(req.user.userFiles);

  req.user.save();

};

var destroyOneFromDb = function destroyOneFromDb(req, res, next){
  console.log(req.body.onefile);
  Image.remove({"_id": req.body.onefile}).exec().then(function(images) {
    console.log(images);
  });
};

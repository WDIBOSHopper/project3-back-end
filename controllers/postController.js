'use strict';

var mongoose = require("../models/index");
var passport = require('passport');

var Post = mongoose.model("Post");

var postController = {


  showAllPosts : function(req, res) {
    Post.find(function(error, Posts){
      if (error) {
        console.error(error);
      };
      res.json(Posts);
    });
  },

  showOnePost : function(req, res) {
    Post.findById(req.params.id, function(error, Post){
      if (error) {
        console.error(error);
      }
      res.json(Post);
    });
  },

   createPost : function(req, res, next) {
    var postCreatePromise = new Promise(function(res, rej) {
      Post.create({
        title: req.body.title,
        entry: req.body.entry,
        page: req.body.page,
        owner: req.body.owner
      }, function(error, Post){
        if(error) {
          rej(error);
          return;
      }

      res(Post);

      });
    });
    postCreatePromise.then(function() {
      res.sendStatus(200);
    }).catch(function(error) {
      res.send('Invalid Entry. Please Try Creating a Post Again.');
    });
  },

  updatePost : function(req, res, next) {

    var postUpdatePromise = new Promise(function(res, rej) {
      Post.update({
        title: req.body.title,
        entry: req.body.entry,
        page: req.body.page,
        owner: req.body.owner
      }, function(error, Post){
        if(error) {
          rej(error);
          return;
      }

      res(Post);

      });
    });
    postUpdatePromise.then(function() {
      res.sendStatus(200);
    }).catch(function(error) {
      next(error);
    });
  },

  deletePost : function(req, res, error) {
    Post.findByIdAndRemove({_id : req.params.id});
    if (error){
      console.error(error);
    }
    res.sendStatus(200);
  }

};

module.exports = postController;

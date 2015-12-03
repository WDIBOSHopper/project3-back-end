'use strict';

var mongoose = require("../models/index");

var Post = mongoose.model("Post");
var User = mongoose.model("User");


var blogController = {
  get: function(req, res){
    User.find({'userName': req.params.username})
    .exec()
    .then(function(user){
      console.log(user);
      console.log(user[0]._id);
      return Post.find({'owner': user[0]._id});
    })
    .then(function(posts){
      console.log(posts);
      posts = posts || "hello";
      res.json({posts: posts});
    })
    .catch(function(err){
      res.setStatus(404);
      res.json({message: "Invalid route", error: err});
    });
  },

  getByUserId: function(req, res){
    console.log(req.params.userId);
    Post.find({'owner': req.params.userId}).exec()
    .then(function(posts){
      console.log(posts);
      posts = posts || "hello";
      res.json({posts: posts});
    })
    .catch(function(err){
      res.setStatus(404);
      res.json({message: "Invalid route", error: err});
    });
  }

  // get: function(req, res){
  //   res.json({message: req.params.username});
  // }
};


module.exports = blogController;



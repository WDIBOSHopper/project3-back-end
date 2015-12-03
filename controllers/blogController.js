'use strict';

var mongoose = require("../models/index");

var Post = mongoose.model("Post");
var User = mongoose.model("User");


var blogController = {
  // get: function(req, res){
  //   User.find({'username': req.params.username})
  //   .exec()
  //   .then(function(user){
  //     console.log(user)
  //     return Post.find({'owner': user[0]._id});
  //   })
  //   .then(function(posts){
  //     res.setStatus(200);
  //     res.json({posts: posts});
  //   })
  //   .catch(function(err){
  //     res.setStatus(404);
  //     res.json({message: "Invalid route", error: err});
  //   });
  // }
  get: function(req, res){
    res.json({message: "It's still a route!"});
  }
};


module.exports = blogController;



'use strict';

var mongoose = require("../models/index");
var passport = require('passport');

var Post = mongoose.model("Post");

var postController = {


  showAllPosts : function(req, res) {
    if(req.user){
      var userId = req.user._id;
      var postsPromise = Post.find({'owner': userId})
        .exec();

      postsPromise.then(function(posts){
        res.status(200).json({posts: posts});
      })
      .catch(function(error){
        console.log(error.stack);
      });
    } else{

      Post.find(function(error, Posts){
        if (error) {
          console.error(error);
        };
        res.status(200).json({posts: Posts});
      });
    }
  },

  showOnePost : function(req, res) {
    Post.findById(req.params.id, function(error, Post){
      if (error) {
        console.error(error);
      }
      res.status(200).json(Post);
    });
  },

   createPost : function(req, res, next) {
    var postCreatePromise = new Promise(function(res, rej) {
      Post.create({
        title: req.body.title,
        entry: req.body.entry,
        owner: req.body.owner
      }, function(error, Post){
        if(error) {
          console.log(error.stack)
          rej({error: error.stack});
          return;
      }

      res(Post);

      });
    });
    postCreatePromise.then(function(post) {
      res.status(201).json(post);
    }).catch(function(error) {
      res.send('Invalid Entry. Please Try Creating a Post Again.');
    });
  },

  updatePost : function(req, res, next) {
      var title = req.body.title;
      var entry = req.body.entry;
      //res.json({body: req.body});

      var postFindPromise = new Promise(
        function(resolve, reject) {
        var selectedPost =  Post.findById(req.params.id, function(error, Post){
        if (error) {
          reject(error);
        }
        resolve(selectedPost);
        });
      });

    var postUpdatePromise = function(selectedPost) {
      selectedPost.update({
        title: title,
        entry: entry
      }, function(error, Post){
        if(error) {
          return;
      }
      res.json(Post);
      });
    };

    postFindPromise.then(
    postUpdatePromise).catch(function(error) {
      res.send('Invalid Entry. Please Try Updating Your Post Again.');
    });
  },

  deletePost : function(req, res, error) {
    Post.findByIdAndRemove({_id : req.params.id}).exec().then(function(){
      res.json({message: "BALETED"});
    })
    .catch(function(err){
      res.json({error: error});
    });

  }
};

module.exports = postController;

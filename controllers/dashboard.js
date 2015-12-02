'use strict'

//this is what I want the final JSON to look like
//var navData = {username: "Rachel", url: "/Rachel/", 
// posts: [ { title: "My first blog", entry: "I created a blog!", date: "2015-10-15"}, {title: "Essential Biking Safety Gear", entry: "I created a blog!", date: "2015-10-15"},{blogName: "Rachel's blog", name: "My third blog", details: "I created a thing!", date: "2015-10-15"}]
// pages: [{title: "something", content:"Some content", url:"someurl/"}]
// };

var mongoose = require("../models/index");
var db = mongoose.connection;

var Page = require('../models/Page.js');
var Post = require('../models/Post.js');

var done = function() {
  db.close();
};

var auth = function(req, res, next){ if (!req.isAuthenticated()) res.send(401); else {return next();} };


// var showPage = function(user_id) {
//   Page.find({'owner': user_id})
//   .exec()
//   .then(function(page) {
//     console.log("THIS PAGE LIST IS FOR A SINGLE USER");
//     console.log(page);
    
//   }).catch(function(error){
//     console.error(error);
//   })
// };

// var showPost = function(user_id) {
//   Post.find({'owner': user_id})
//   .exec()
//   .then(function(post) {
//     console.log("THIS POST LIST IS FOR A SINGLE USER");
//     console.log(post);
//   }).catch(function(error){
//     console.error(error);
//   })
//   .then(function(post){
//     return post;
//   });
// };

// var promiseChain = Page.find({'owner': user_id})
//   .exec()
//   .then(function(pages){
//     return {pages: pages};
//   }).then(function(pagesObject){
//     pagesObject.posts = Post.find({'owner': user_id});
//     return pagesObject;
//   });




var Dashboard = {
  auth: auth,

  get: function(req, res, next){
    var userId = req.user._id;

    var pagesPromise = Page.find({'owner': userId})
    .exec();

    var postsPromise = Post.find({'owner': userId})
    .exec();
      Promise.all([pagesPromise, postsPromise]).then(function(pagesAndPostsResults) { 
        var pages = pagesAndPostsResults[0];
        var posts = pagesAndPostsResults[1];
        var sendBack = {username: req.user.userName, userId: userId,
    pages: pages, posts: posts};

    res.json(sendBack);
      }).catch(function(error){
        next (error);
      });
  }
};



module.exports = Dashboard;

var express = require('express');
var router = express.Router();
// var mongoose = require('index');
var controller = require('../controllers/dashboard')
//this is what I want the final JSON to look like
//var navData = {username: "Rachel", url: "/Rachel/", blogs: [ {blogName: "My Biking Passion", name: "My first blog", details: "I created a blog!", date: "2015-10-15"}, {blogName: "My Biking Passion", name: "Essential Biking Safety Gear", details: "I created a blog!", date: "2015-10-15"},{blogName: "Rachel's blog", name: "My third blog", details: "I created a thing!", date: "2015-10-15"}]};


/* GET users listing. */


router.route('/')
  .get(controller.auth);

module.exports = router;



// var mongoose = require("../../models/index");
// var db = mongoose.connection;
// var User = mongoose.model("User");
// var Page = mongoose.model("Page");

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = mongoose.connection;

var Page = require('../../models/Page.js');
var UserSchema = require('../../models/User.js');
var User = require('../../models').model('User');



var done = function() {
  db.close();
};

var findUserId = function(username){
  console.log("entered the function");
  User.find({'userName': username})
    .exec()
    .then(function(user){
    console.log("hello");
    console.log(user[0]._id);
  })
  .catch(function(err){ console.error(err);})
  .then(done);
};

//var showUserPagesPromise = Page.find({'owner': user_id}).exec();

var findPagesByUsername = function(username){
  User.find({'userName': username})
    .exec()
  .then(function(user){
    console.log(user[0]._id);
    return Page.find({'owner': user[0]._id});
  })
  .then(function(pages){
    console.log(pages);
  })
  .catch(function(err){ console.error(err);})
  .then(done);
};



db.once('open', function(){

  var username = process.argv[2];
  findPagesByUsername(username);

 });

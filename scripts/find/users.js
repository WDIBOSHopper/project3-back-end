

// var mongoose = require("../../models/index");
// var db = mongoose.connection;
// var User = mongoose.model("User");
// var Page = mongoose.model("Page");

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongo-crud');
var db = mongoose.connection;

var Page = require('../../models/Page.js');


var done = function() {
  db.close();
};

var showUserPages = function(user_id) {
  Page.find({'owner': user_id}).exec()
  .then(function(pages){
    console.log("hello");
    console.log(pages);
  })
  .catch(function(err){ console.error(err);})
  .then(done());
};




db.once('open', function(){

  var user_id = process.argv[2];
  showUserPages(user_id);

});

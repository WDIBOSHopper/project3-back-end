var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongo-crud');
var db = mongoose.connection;

var Page = require('../../models/Page.js');

var done = function() {
  db.close();
};

var showPage = function(user_id) {
  Page.find({'owner': user_id})
  .exec()
  .then(function(page) {
    console.log("THIS BLOG LIST IS FOR A SINGLE USER");
    console.log(page);
  }).catch(function(error){
    console.error(error);
  }).then(done);
};

db.once('open', function(){
  var user_id = process.argv[2];

  var page = showPage(user_id);
});


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongo-crud');
var db = mongoose.connection;

var Page = require('../../models/Page.js');

var done = function() {
  db.close();
};

var removePage = function(page_id) {
  Page.findByIdAndRemove(page_id) 
  .then(function(page) {
    console.log("DELTETED");
  }).catch(function(error){
    console.error(error);
  }).then(done);
};

db.once('open', function(){
  var page_id = process.argv[2];
  var page = removePage(page_id);
  // console.log(page.populate('user_id'));
  // console.log(Page.find({'title': "hello"}).populate('user_id'));
});

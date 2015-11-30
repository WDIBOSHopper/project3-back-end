
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongo-crud');
var db = mongoose.connection;

var Page = require('../../models/Page.js');

var done = function() {
  db.close();
};

var create = function(title, content, url, user_id) {
  Page.create({
    'title': title, 
    'content': content,
    'url': url,
    'user_id': user_id   
  }).then(function(page) {
    console.log(page);
  }).catch(function(error){
    console.error(error);
  }).then(done);
};

db.once('open', function(){
  var title = process.argv[2];
  var content = process.argv[3];
  var url = process.argv[4];
  var user_id = process.argv[5];
  var page = create(title, content, url, user_id);
  // console.log(page.populate('user_id'));
  // console.log(Page.find({'title': "hello"}).populate('user_id'));
});

// var pages = 
 

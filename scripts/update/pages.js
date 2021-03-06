var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongo-crud');
var db = mongoose.connection;

var Page = require('../../models/Page.js');

var done = function() {
  db.close();
};

var updatePage = function(page_id, title, content, url) {
  Page.update(
    { _id: page_id },
    {
      $set: {
        'title': title,
        'content': content,
        'url': url
      }
    },
    { upsert: true }
  )
  .then(function(page) {
    console.log("THIS BLOG WAS UPDATED");
  }).catch(function(error){
    console.error(error);
  }).then(done);
};

db.once('open', function(){
  var page_id = process.argv[2];
  var title = process.argv[3];
  var content = process.argv[4];
  var url = process.argv[5];
  var page = updatePage(page_id, title, content, url);
});

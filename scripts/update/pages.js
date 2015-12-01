var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongo-crud');
var db = mongoose.connection;

var Page = require('../../models/Page.js');

var done = function() {
  db.close();
};

var updatePage = function(title, content, url, page_id) {
  Page.update(
    { page_id },
    {
      'title': title,
      'content': content,
      'url': url
    }
  )
  .then(function(page) {
    console.log("UPDATED");
  }).catch(function(error){
    console.error(error);
  }).then(done);
};

db.once('open', function(){
  var title = process.argv[2];
  var content = process.argv[3];
  var url = process.argv[4];
  var page_id = process.argv[5];
  var page = updatePage(title, content, url, page_id);
});

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongo-crud');
var db = mongoose.connection;

var Post = require('../../models/Post.js');

var done = function() {
  db.close();
};

var updatePost = function(post_id, title, entry) {
  Post.update(
    { _id: post_id },
    {
      $set: {
        'title': title,
        'entry': entry
      }
    },
    { upsert: true }
  )
  .then(function(post) {
    console.log("POST WAS UPDATED");
  }).catch(function(error){
    console.error(error);
  }).then(done);
};

db.once('open', function(){
  var post_id = process.argv[2];
  var title = process.argv[3];
  var entry = process.argv[4];
  var post = updatePost(post_id, title, entry);
});

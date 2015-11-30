
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongo-crud');
var db = mongoose.connection;

var Post = require('../../models/Post.js');

var done = function() {
  db.close();
};

var removePost = function(post_id) {
  Post.findByIdAndRemove(post_id)
  .then(function(post) {
    console.log("DELTETED");
  }).catch(function(error){
    console.error(error);
  }).then(done);
};

db.once('open', function(){
  var post_id = process.argv[2];
  var post = removePost(post_id);
});

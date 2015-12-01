var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongo-crud');
var db = mongoose.connection;

var Post = require('../../models/Post.js');

var done = function() {
  db.close();
};

var showPost = function(user_id) {
  Post.find({'owner': user_id})
  .exec()
  .then(function(post) {
    console.log("THIS POST LIST IS FOR A SINGLE USER");
    console.log(post);
  }).catch(function(error){
    console.error(error);
  }).then(done);
};

db.once('open', function(){
  var user_id = process.argv[2];

  var post = showPost(user_id);
});

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongo-crud');
var db = mongoose.connection;

var User = require('../../models/User.js');

var done = function() {
  db.close();
};

var showUserPages = function(user_id) {
  User.findById(user_id, function(err, user){
    if (err) {
      return err;
    } 
    console.log(user);
    return user;
  })
  .exec()
  .then(function(user) {
    console.log("Found a user");
    console.log(user);
  }).catch(function(error){
    console.error(error);
  }).then(done);
};

db.once('open', function(){
  var user_id = process.argv[2];
  showUserPages(user_id);
});

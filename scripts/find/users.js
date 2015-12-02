

var mongoose = require("../../models/index");
var db = mongoose.connection;
var User = mongoose.model("User");


var done = function() {
  db.close();
};

var showUserPages = function(user_id) {
  User.findById({_id: user_id})
  .exec()
  .then(function(user) {
    console.log(user.populate('pages'));
  })
  // .then(function(user){
  //   console.log(user.pages);
  // })
  .catch(function(error){
    console.error(error);
  }).then(done);
};

db.once('open', function(){
  var user_id = process.argv[2];
  showUserPages(user_id);
});

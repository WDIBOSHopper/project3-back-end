
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
    'owner': user_id
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
  // var owner2 = Page.findOne({title: "newPage"}).populate('owner', 'userName').exec(function (err, page) {
  //     if (err) return handleError(err);
  //     console.log(page.owner);
  //     console.log('The username is %s', page.owner[0].userName);
});
// .exec().then(done);
  // console.log();

// var pages =


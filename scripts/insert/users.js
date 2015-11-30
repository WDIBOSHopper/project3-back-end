var userSchema = require('../../models/User');
var mongoose = require('mongoose');
// url structure
// protocol://hostname[:port]/path
var db = mongoose.connect('mongodb://localhost/mongo-crud');
var Schema = mongoose.Schema;

var User = mongoose.model('user', userSchema);

var bill = new User();

bill.userName = 'Bill';


'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongoose-crud');
var db = mongoose.connection;

var User = require('./lib/users.js');

var done = function() {
  db.close();
};

var create = function(username) {
  User.create({
    'username': username,    
  }).then(function(user) {
    console.log(user);
  }).catch(function(error){
    console.error(error);
  }).then(done);
};

var index = function() {
  user.find().exec().then(function(people) {
    people.forEach(function(user) {
      console.log(user);
    });
  }).catch(console.error).then(done);
};

db.once('open', function(){
  var command = process.argv[2];
  switch (command) {
    case 'c':
      var given_name = process.argv[3];
      var surname = process.argv[4];
      if (true || given_name) {
        create(given_name, surname);
      } else {
        console.log('usage c <given_name> [surname]');
        done();
      }
    break;
    case 'r':
    break;
    case 'u':
    break;
    case 'd':
    break;
    default:
      index();
    break;
  }

});


// db.users.insert([
//   {
//     username: 'Lauren',
//     email: 'lauren@lauren.com',
//     password: '123'
//   },
//   {
//     username: 'Rachel',
//     email: 'rachel@rachel.com',
//     password: '123'
//   },
//   {
//     username: 'Bill',
//     email: 'bill@bill.com',
//     password: '123'
//   }
// ]);

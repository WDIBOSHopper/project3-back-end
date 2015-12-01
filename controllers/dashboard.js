'use strict'

//this is what I want the final JSON to look like
//var navData = {username: "Rachel", url: "/Rachel/", 
// posts: [ { title: "My first blog", entry: "I created a blog!", date: "2015-10-15"}, {title: "Essential Biking Safety Gear", entry: "I created a blog!", date: "2015-10-15"},{blogName: "Rachel's blog", name: "My third blog", details: "I created a thing!", date: "2015-10-15"}]
// pages: [{title: "something", content:"Some content", url:"someurl/"}]
// };

var auth = function(req, res, next){ if (!req.isAuthenticated()) res.send(401); else {return next();} };

var Dashboard = {
  auth: auth,

  get: function(req, res, next){
    var userId = req.user._id;

    var sendBack = {username: req.user.userName, userId: userId
    };

    res.json(sendBack);
  }
};



module.exports = Dashboard;

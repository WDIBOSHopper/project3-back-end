'use strict'

var auth = function(req, res, next){ if (!req.isAuthenticated()) res.send(401); else {next();} };

var Dashboard = {
  auth: auth,

  get: function(req, res, next){
    res.json({message: "You are REALLY authenticated! "});
  }
};



module.exports = Dashboard;

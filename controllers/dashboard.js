'use strict'

var auth = function(req, res, next){ if (!req.isAuthenticated()) res.send(401); else res.json({message: "You are Authenticated!"}); };

var Dashboard = {
  auth: auth
};



module.exports = Dashboard;

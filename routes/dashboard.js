var express = require('express');
var router = express.Router();
// var mongoose = require('index');
var controller = require('../controllers/dashboard');



/* GET users listing. */


router.route('/')
  .all(controller.auth)
  .get(controller.get);

module.exports = router;

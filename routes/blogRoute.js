var express = require('express');
var passport = require('passport');
var router = express.Router();
var blogController = require('../controllers/blogController');

router.get('/', function(req, res){res.json("it's a real route!");});


module.exports = router;

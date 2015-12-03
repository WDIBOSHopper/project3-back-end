var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function(req, res){res.json("it's a real route!");});


module.exports = router;

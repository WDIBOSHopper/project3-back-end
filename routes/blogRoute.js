var express = require('express');
var passport = require('passport');
var router = express.Router();
var blogController = require('../controllers/blogController');

router.get('/', function(req, res){ res.json({username: req.params});
});


module.exports = router;

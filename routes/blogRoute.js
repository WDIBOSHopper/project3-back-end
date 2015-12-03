var express = require('express');
var passport = require('passport');
var router = express.Router();
var blogController = require('../controllers/blogController');

router.get('/', blogController.get);


module.exports = router;

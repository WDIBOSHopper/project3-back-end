var express = require('express');
var passport = require('passport');
var router = express.Router();
var blogController = require('../controllers/blogController');

router.get('/:userId', blogController.getByUserId);


module.exports = router;

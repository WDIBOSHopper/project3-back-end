var express = require('express');
var router = express.Router();
var pageController = require('../controllers/pageController');


/* GET pages listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', pageController.createPage);

router.patch('/:id', pageController.updatePage);

router.delete('/:id', pageController.deletePage);

module.exports = router;

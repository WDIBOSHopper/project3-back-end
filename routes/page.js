var express = require('express');
var router = express.Router();
var pageController = require('../controllers/pageController');

router.get('/', pageController.showAllPages);

router.get('/:id', pageController.showOnePage);

router.post('/', pageController.createPage);

router.patch('/:id', pageController.updatePage);

router.delete('/:id', pageController.deletePage);

module.exports = router;

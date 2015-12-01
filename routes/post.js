var express = require('express');
var router = express.Router();
var postController = require('../controllers/postController');

router.get('/', postController.showAllPosts);

router.get('/:id', postController.showOnePost);

router.post('/', postController.createPost);

router.patch('/:id', postController.updatePost);

router.delete('/:id', postController.deletePost);



/* GET posts listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;


'use strict';

var express = require('express');
var router = express.Router();
var controller = require('../controllers/images');
var image = require('../models/image');

var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.get('/', controller.index);

router.post('/', upload.single('file'), controller.create);

router.patch('/file', controller.update);

router.patch('/deleteone', controller.destroyOneFromUser);

router.delete('/deleteone', controller.destroyOneFromDb);

router.delete('/', controller.destroy);



module.exports = router;

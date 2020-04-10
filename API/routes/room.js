var express = require('express');
var router = express.Router();
var multer = require('multer')

const RoomController = require('../controllers/room');

router.get('/', RoomController.create_room);

module.exports = router;

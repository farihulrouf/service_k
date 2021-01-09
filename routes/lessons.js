const express = require('express');
const router = express.Router();
const lessonHandler = require('./handler/lessons');
/* GET users listing. */

router.post('/create', lessonHandler.create);

module.exports = router;

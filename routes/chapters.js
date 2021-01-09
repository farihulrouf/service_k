const express = require('express');
const router = express.Router();
const chapterHandler = require('./handler/chapters');
/* GET users listing. */

router.post('/create', chapterHandler.create);
router.get('/', chapterHandler.getAll);

module.exports = router;

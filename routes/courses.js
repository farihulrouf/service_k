const express = require('express');
const router = express.Router();
const coursesHandler = require('./handler/courses');
/* GET users listing. */

router.post('/create', coursesHandler.create);
router.get('/', coursesHandler.getAll);
router.get('/:id', coursesHandler.getCourse);

module.exports = router;

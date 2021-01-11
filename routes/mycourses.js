const express = require('express');
const router = express.Router();
const myCourseHandler = require('./handler/mycourses');
/* GET users listing. */

router.post('/create', myCourseHandler.create);

module.exports = router;

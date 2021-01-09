const express = require('express');
const router = express.Router();
const imgCoursesHandler = require('./handler/imgcourses');
/* GET users listing. */

router.post('/create', imgCoursesHandler.create);

module.exports = router;

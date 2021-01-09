const express = require('express');
const router = express.Router();
const mentorHandler = require('./handler/mentors');
/* GET users listing. */

router.post('/create', mentorHandler.create);
router.get('/', mentorHandler.getAll);

module.exports = router;

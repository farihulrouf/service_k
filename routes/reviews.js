const express = require('express');
const router = express.Router();
const reviewHandler = require('./handler/reviews');
/* GET users listing. */

router.post('/create', reviewHandler.create);
module.exports = router;

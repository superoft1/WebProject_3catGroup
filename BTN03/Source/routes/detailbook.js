const express = require('express');
const router = express.Router();
const bookDetailController = require('../controllers/bookdetailController');

router.get('/', bookDetailController.index);

module.exports = router;
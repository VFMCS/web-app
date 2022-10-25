const express = require('express'),
router = express.Router(),
data = require('../controllers/data')


router.get('/', data.data)

module.exports = router
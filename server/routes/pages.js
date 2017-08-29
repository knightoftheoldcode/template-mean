const express = require('express');
const router = express.Router();

const ctrlPages = require('../controllers/pages');

router.get('/', ctrlPages.index);

module.exports = router;

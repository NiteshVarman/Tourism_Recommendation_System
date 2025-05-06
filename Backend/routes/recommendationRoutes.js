const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');

// POST /recommend
router.post('/', recommendationController.recommend);

module.exports = router;
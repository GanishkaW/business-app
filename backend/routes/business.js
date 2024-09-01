const express = require('express');
const router = express.Router();
const { createBusiness } = require('../controllers/businessController');

// POST /api/businesses
router.post('/', createBusiness);

module.exports = router;
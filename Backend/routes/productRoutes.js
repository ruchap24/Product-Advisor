const express = require('express');
const { getRecommendedProducts } = require('../controllers/productController');

const router = express.Router();

router.post('/recommend', getRecommendedProducts);

module.exports = router;
const express = require('express');

const router = express.Router();

const getProducts = require('../controllers/products-controllers')

router.get('/', getProducts.allProducts);

router.get('/bestSeller', getProducts.bestSeller);

router.get('/:category', getProducts.productsCategory);

router.get('/:Reference', getProducts.getProductByRef);

module.exports = router;
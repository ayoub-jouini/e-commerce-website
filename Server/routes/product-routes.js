const express = require('express');

const router = express.Router();

const products = require('../controllers/products-controllers')

router.get('/', products.allProducts);

router.post('/', products.createProduct);

router.get('/bestSeller', products.bestSeller);

router.get('/:category', products.productsCategory);

router.get('/:category/:Reference', products.getProductByRef);

router.patch('/:category/:Reference', products.updateProduct);

module.exports = router;
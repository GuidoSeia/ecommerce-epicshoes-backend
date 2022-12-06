var express = require('express');
var router = express.Router();

const {getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController')

router.get('/', getProducts)
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id', updateProduct);

module.exports = router;
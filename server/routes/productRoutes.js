const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Get single product
router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

// Add product (admin)
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
});

module.exports = router;
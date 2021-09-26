const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const productData = require('./add-product');

const router = express.Router();
const products = productData.products; 

router.get('/',(req, res, next) => {
    res.render('shop',{
    title: 'Shop',
    path: '/', 
    prod: products
    });
});



module.exports = router;

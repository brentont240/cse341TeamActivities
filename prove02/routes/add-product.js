const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product',(req, res, next) => {
    res.render('add-product',{
        title: 'Add Product',
        path: '/add-product',
        // products: products
        });
});

router.post('/add-product',(req, res, next) => {
    products.push({prodTitle: req.body.prodTitle, prodPrice: req.body.prodPrice, prodDesc: req.body.prodDesc});
    res.redirect('/');
});

router.post('/removeProduct',(req, res, next) => {
    for (let i = 0 ; i < products.length; i++){
        if(products[i].prodTitle == req.body.removeProduct){
        products.splice(i,1);
        }
      };
      res.redirect('/');
});


exports.routes = router;
exports.products = products;
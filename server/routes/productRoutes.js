const express = require('express');
const router = express.Router();

const { 
    getAllProducts,
    getProductById, 
    } = require("../controller/productControllers");
    
//Get All The Products From db
//@route Get /api/products/
//@access Public
router.get('/', getAllProducts);

//Get a Product By Id From db
//@route Get /api/products/:id
//@access Public
router.get('/:id', getProductById);

module.exports = router;
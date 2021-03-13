const express = require("express");

//const router = express.Router();//omri
var router = express.Router();
const productController = require('../controller/productControllers');
router.route('/')
    .get(productController.getProducts)
    .post(productController.createProduct);
router.route('/:id')
    .get(productController.getProductById)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);





//Omri
// const {
//   getProducts,
//   getProductById,
// } = require("../controller/productControllers");

// //Get All The Products From db
// //@route Get /api/products/
// //@access Public
// router.get("/", getProducts);

// //Get a Product By Id From db
// //@route Get /api/products/:id
// //@access Public
// router.get("/:id", getProductById);

module.exports = router;
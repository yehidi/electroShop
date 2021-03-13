const Product = require("../models/Product");
const ProductService = require('../services/productService');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const createProduct = async(req, res) => {
  
    const product = await ProductService.createProduct(req);
    res.json(product);
  
}

const updateProduct = async (req, res) => {
  
  if (!req.body.name) {
    res.status(400).json({
      message: "name is required",
    });
  }

  const product = await productService.updateProduct(req.params.id, req.body.name);
  if (!product) {
    return res.status(404).json({ errors: ['Product not found'] });
  }

  res.json(product);
};

const deleteProduct = async (req,res)=>{
  const product = await ProductService.deleteProduct(req.params.id);
  if (!product) {
    return res.status(404).json({ errors: ['Product not found'] });
  }
  res.send();
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
 
};
const Product = require("../models/Product");

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

//angular
const create = (req, res) => {

  const product = new Product({
    name: req.body.content,
    category:req.body.content,
    description:req.body.content,
    price:req.body.content,
    countInStock:req.body.content,
    imageUrl:req.body.content
  });
  product.save().then(() => {
    res.json({ status: 'success' });
}).catch(() => {
    res.json({ status: 'failed' });
});
  // product.save().then(newProduct => {
  //     User.findOneAndUpdate({ username: req.body.username }, {
  //         $push: {
  //             products: {
  //                 $each: [newProduct],
  //                 $position: 0
  //             }
  //         }
  //     }).then(() => res.json({ status: 'success', value : newProduct })).catch(() => {
  //         res.json({ status: 'failed' });
  //     });
  // }).catch(() => {
  //     res.json({ status: 'failed' });
  // });
}
//angular

module.exports = {
  getProducts,
  getProductById,
  //angular
  create
  //angular
};
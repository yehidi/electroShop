const Product = require('../models/Product');

const createProduct = async (req) => {
    console.log("now start");

    console.log("name:" +" "+req.body.name);
    console.log("now end");
    const product = new Product({
        name:req.body.name,
        category:req.body.category,
        description:req.body.description,
        price:req.body.price,
        countInStock:req.body.countInStock,
        imageUrl:"test"
      
    });

   

    return await product.save();
};

const getProductById = async (id) => {
    return await Product.findById(id);
};

const getProducts = async () => {
    return await Product.find({});
};

const updateProduct = async (req) => {
    const product = await getProductById(id);
    if (!product)
        return null;

    product.name = req.body.name;
    product.category = req.body.category;
    product.description = req.body.description;
    product.price = req.body.price;
    product.countInStock = req.body.countInStock;
    product.imageUrl = imageUrl;
    await product.save();
    return product;
};

const deleteProduct = async (id) => {
    const product = await getProductById(id);
    if (!product)
        return null;

    await product.remove();
    return product;
};


module.exports = {
    createProduct,
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct
}

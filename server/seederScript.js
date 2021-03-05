require('dotenv').config();
const productsData = require('./data/products');
const usersData = require('./data/users');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const User = require('./models/User');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        //await User.deleteMany({});

        await User.insertMany(usersData);
        console.log("Data Import Success");
        process.exit();
    } catch (error) {
        console.log("Data Import FAIL");
        process.exit(1);
    }
};

importData();
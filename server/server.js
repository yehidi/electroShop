require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const app = express();
const productRoutes = require('./routes/productRoutes');
const dataProducts = require('./data/products');


app.get('/', (req,res) =>{
    res.send('Server is Ready!');
});

app.get('/products', (req,res) =>{
    res.send(dataProducts);
});
connectDB();
app.use(express.json());
app.use(cors());
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const app = express();
const productRoutes = require('./routes/productRoutes');
const dataProducts = require('./data/products');
const userRoutes = require('./routes/usersRouter');
const dataUsers = require('./data/users');

connectDB();

app.get('/', (req,res) =>{
    res.send('Server is Ready!');
});

app.get('/products', (req,res) =>{
    res.send(dataProducts);
});


app.get('/users', (req,res) =>{
    res.send(dataUsers);
});

app.use((err,req, res, next) => {
    res.status(500).send({ message: "ERROR" });
})
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api/products', productRoutes); 
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
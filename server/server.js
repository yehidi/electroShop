require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const app = express();
const productRoutes = require('./routes/productRoutes');
const dataProducts = require('./data/products');
const userRoutes = require('./routes/usersRouter');
const dataUsers = require('./data/users');

//user-Angular
const http=require('http');
const socketIo=require('socket.io'); 
const server=http.createServer(app);
const bodyParser = require('body-parser');
const io = socketIo(server/*, {
    cors: {
        origins: ["http://localhost:4200", "http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: false
    }
}*/);
var count = 0;
//user connect
io.on('connection', (socket) => {        
    if (socket.handshake.headers.origin === "http://localhost:3000") {
        count++;        
        socket.broadcast.emit('count', count); 
        //console.log(count);              
//user disconnect
        socket.on('disconnect', () => {
            count--;                   
            socket.broadcast.emit('count', count); 
            //console.log(count);               
        });
    }   
}); 
app.use(bodyParser.urlencoded({ extended: true }));


//user-Angular
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
//user-Angular
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//user-Angular
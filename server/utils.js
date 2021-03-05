require('dotenv').config();
const jwt = require('jsonwebtoken')

const generateToken = (user) =>{
    return jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
}, process.env.JWT_SECRET,
    {
        expiresIn: '60d',
    }
    )
};

module.exports = generateToken;
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

const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
            if (error){
                res.status(401).send({message: 'Invalid Token'});
            } else {
                req.user = decode;
                next();
            }
        })
    }
    else {
        res.status(401).send({message: 'No Token'});
    }
}

module.exports = generateToken, isAuth;
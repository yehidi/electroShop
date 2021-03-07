const User = require("../models/User");
const generateToken = require("../utils");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Find users error.');
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Find user error.');
  }
};

const getSignIn = async (req, res) => {
  const user = await User.findOne({email: req.body.email});
  if (user){
    if (req.body.password === user.password){
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return user;
    }
  }
  res.status(401).send({message: 'Invalid email/password'});
};

module.exports = {
  getUsers,
  getUserById,
  getSignIn
};
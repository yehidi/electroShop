const express = require("express");
const usersRouter = express.Router();


const {
  getUsers,
  getUserById,
  getSignIn,
} = require("../controller/userController");

//Get All The Users From db
//@route Get /api/users/
//@access Public
usersRouter.get("/", getUsers);

//Get a User By Id From db
//@route Get /api/users/:id
//@access Public
usersRouter.get("/:id", getUserById);

usersRouter.get("/signin", getSignIn);

module.exports = usersRouter;
const express = require("express");
const orderRouter = express.Router();

const {
  getOrders,
  postOrder
} = require("../controller/orderController");

orderRouter.get("/", getOrders);

orderRouter.post("/", postOrder);

module.exports = orderRouter;
const Order = require("../models/Order");
const { isAuth } = require ('../utils');

const getOrders = async (req, res) => {
    try {
      const orders = await Order.find({});
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).send('Find orders error.');
    }
  };

const postOrder = (isAuth, async(req, res) => {
    if (req.body.orderItems.length === 0) {
        res.status(400).send({ message: 'Cart is empty' });
      } else {
        const order = new Order({
          orderItems: req.body.orderItems,
        //   itemsPrice: req.body.itemsPrice,
        //   totalPrice: req.body.totalPrice,
           user: req.user._id,
        });
        const createdOrder = await order.save();
        res.status(201).send({ message: 'New Order Created', order: createdOrder });
      }
}
)

module.exports = {
    getOrders,
    postOrder,
  };
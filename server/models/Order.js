const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  orderItems: [{
    name: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
  }],
    // totalPrice: {type: Number, required: true},
    // itemsPrice: {type: Number, required: true},
    userOrder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        }
},
    {timestamps: true}
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true,
    },
},
    {timestamps: true}
);

const User = mongoose.model('users', userSchema)
module.exports = User;

//צריך אולי להוסיף ref כדי לעשות קשר יחיד-רבים או כל קשר שנרצה - הרצאה 10 01:01:00
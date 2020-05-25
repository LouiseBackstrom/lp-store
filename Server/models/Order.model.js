const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OrderSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true 
        
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    sent: {
        type: Boolean,
        required: true
    },
    payment_method: {
        type: String,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    }
})

module.exports = Order = mongoose.model('orders', OrderSchema)
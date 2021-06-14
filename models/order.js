const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');
const Restaurant = require('./restaurant');
const Dish = require('./dish');

const orderSchema = new Schema({
    name: {type: String, required: true},
    amount: {type: Number, required: true},
    _user: {
        id: Schema.Types.ObjectId,
        name: {type: String, required: true},
        ref: 'User'
    },
    _dishes: [
        {
            id: Schema.Types.ObjectId,
            name: {type: String, required: true},
            ref: 'Dish',
            quantity: {type: Number, default: 1}
        }
    ],
    _restaurant:{
        id: Schema.Types.ObjectId,
        name: {type: String, required: true},
        ref: 'Restaurant'
    },
    paymentType: {type: String, required: true},
    time: {type: Date, required: true, default: Date.now},
},
{
    strict: true
});

module.exports = mongoose.model('Order', orderSchema);
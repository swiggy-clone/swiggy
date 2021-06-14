const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review').schema;
const Dish = require('./dish').schema;

const restaurantSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    description: String,
    location: {type: String, required: true},
    menu: [Dish],
    mobile: String,
    username: {type: String, required: true},
    password: {type: String, required: true},
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
},
{
    strict: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
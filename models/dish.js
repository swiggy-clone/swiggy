const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review').Schema;
const dishSchema = new Schema({
    name: {type: String, reqiured: true},
    price: {type: Number, required: true},
    description: {type: String},
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: Review
    }]
},
{
    strict: true
}
);

module.exports = mongoose.model('Dish', dishSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user').schema;
const reviewSchema = new Schema({
    _user: {
        id: Schema.Types.ObjectId,
        name: {type: String, required: true},
        ref: User
    },
    likes: {type: Number, default: 0},
    body: {type: String, required: true}
},
{
    strict: true
}
);

module.exports = mongoose.model('Review', reviewSchema);
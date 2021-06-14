const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    mobile:{type: String, required: true},
    age: Number,
    email: {type: String, required: true}
},
{
    strict: true
}
);

module.exports = mongoose.model('User', userSchema);


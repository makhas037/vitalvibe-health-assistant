const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number },
    height: { type: Number }, // in cm
    weight: { type: Number }, // in kg
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
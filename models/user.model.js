const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    age: { type: Number },
    sex: { type: String },
    sickness: { type: String },
    profilePicture: { type: String },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

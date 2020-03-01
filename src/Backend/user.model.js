const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true, minlength: 3},
    todos: { type: Array, required: true, timestamps:true },
    _id: {type: String, required: false}
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
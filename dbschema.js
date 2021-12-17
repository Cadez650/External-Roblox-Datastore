const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    UserId: String,
    Data: Array
});

module.exports = mongoose.model('users', userSchema);
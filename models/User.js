const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: {type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: {type: String},
    date: { type: Date, default: Date.now},
    last_login: { type: Date, default: Date.now},
	is_admin: { type: Boolean, default: false},
})

module.exports = User = mongoose.model('user', UserSchema);

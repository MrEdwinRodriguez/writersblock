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
    isActive: { type: Boolean, default: true},
    isStudent: {type: Boolean, default: false}, 
    isTeacher: {type: Boolean, default: false}, 
    isParent: {type: Boolean, default: false}, 
    isInvitedByTeacher: {type: Boolean, default: false},
    isInvitedByParent: {type: Boolean, default: false},
    invitedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    isInvitedByPanding: {type: Boolean},
})

module.exports = User = mongoose.model('user', UserSchema);

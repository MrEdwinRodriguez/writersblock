const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    goals: [
		{
			goal: { type: String, required: true },
			isComplete: { type: Boolean, default: false },
		}
	],
    score: {type: Number, default: 0},
    grade: {type: String},
    age: {type: Number},
    dob: {type: Date},
    bio: {type: String},
    favoriteGenre: {type: [String]},
    class: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
    invitedStudent: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema)




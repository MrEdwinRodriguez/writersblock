const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    goals: [
		{
			goal: { type: String, required: true },
			complete: { type: Boolean, default: false },
		}
	],
    score: {type: Number, default: 0},
    grade: {type: String},
    age: {type: Number},
    dob: {type: Date},
    bio: {type: String},
    favoriteGenre: {type: [String]},
})

module.exports = Student = mongoose.model('student', StudentSchema)
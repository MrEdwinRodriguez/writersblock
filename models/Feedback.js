const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    parent_writing: {type: mongoose.Schema.Types.ObjectId, ref: 'writing'}, 
    text: {type: String, required: true},
    name: {type: String },
    date: { type: Date, default: Date.now },
    updated: { type: Date },
    comments: [
		{ 
			user: { type: mongoose.Schema.Types.ObjectId, ref: 'users'},
			text: {type: String, required: true},
			date: { type: Date, default: Date.now },
			updated: { type: Date }
		}
	],
})

module.exports = Feedback = mongoose.model('feedback', FeedbackSchema);
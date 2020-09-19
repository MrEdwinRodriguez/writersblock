const mongoose = require('mongoose');

const WritingSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    parent_writing: {type: mongoose.Schema.Types.ObjectId, ref: 'writing'}, 
    text: {type: String, required: true},
    name: {type: String },
    inspiration: {type: String },
    date: { type: Date, default: Date.now },
	updated: { type: Date },
    comments: [
		{ 
			user: { type: mongoose.Schema.Types.ObjectId, ref: 'users'},
			text: {type: String, required: true},
			name: {type: String },
			date: { type: Date, default: Date.now },
			updated: { type: Date }
		}
	],
})

module.exports = Writing = mongoose.model('writing', WritingSchema);
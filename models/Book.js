const mongoose = require('mongoose');


// goals: [],
// deadline:"",
// notes: [],
// chapters: [],
// content: "",
const BookSchema = new mongoose.Schema({
    title: {type: String },
    idea: { type: String },
    type: [ { type: String } ],
    genre: { type: String },
    characters: [
        { 
            name: { type: String},
            age: { type: Number },
            appearence: { type: String },
            description: { type: String },
            characterNotes: { type: String }
        }
    ],
    setting: [
        {
            location: { type: String },
            description: { type: String },
            timeFrame: { type: String },
        }
    ],
    goals: [ { type: String } ],
    deadline: [ 
        { 
            isHardDeadline: { type: Boolean },
            date: { type: Date },
            accomplishment:  { type: String }
        } 
    ],
    notes: [ { type: String } ],
    chapters: [
        { 
        chapterNumber : { type: Number },
        content: { type: String },
     }
    ],
    content: { type: String }
});

module.exports = Book = mongoose.model('book', BookSchema);


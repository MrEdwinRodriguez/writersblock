const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {type: String },
    ideas: [{ type: String }],
    type: [ { type: String } ],
    outlines: [ 
        { 
            name: { type: String },
            subjects: [
                {
                    subjectName: { type: String },
                    points: [
                        {
                            pointName: { type: String },
                            text: { type: String }
                        }
                    ]
                }
            ] 
        }
    ],
    characters: [
        { 
            name: { type: String},
            age: { type: Number },
            homeTown: { type: Number },
            appearance: { type: String },
            personality: { type: String },
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
    deadlines: [ 
        { 
            isHardDeadline: { type: Boolean },
            date: { type: Date },
            description:  { type: String },
            isMet: { type: Boolean, default: false }
        } 
    ],
    notes: [ 
        { 
            date: { type: Date, default: new Date() },
            note:  { type: String },
            reference: { type: String },

        } 
     ],
    chapters: [
        { 
        chapterNumber : { type: Number },
        content: { type: String },
     }
    ],
    images: [{ type: String }],
    content: { type: String }
});

module.exports = Book = mongoose.model('book', BookSchema);


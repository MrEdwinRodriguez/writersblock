const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require("../../models/Profile");
const Writing = require("../../models/Writing")
const Book = require("../../models/Book")
// const User = require("../../models/User");
const { check, validationResult } = require('express-validator');
const validations = require("../../helpers/validations");


//POST api/book/create
//POST book
//Private
router.post('/create', async (req, res) => {
    try {
        console.log(req.body)
        // const user = await User.findOne({_id: req.user.id});
        // if (!user) {
        //     return res.status(400).json({errors: [{msg: 'No user found'}]})
        // }
        const newBook = new Book({
            // user: req.user.id,
            title: req.body.title,
            ideas: req.body.ideas,
            outlines: req.body.outlines,
            characters: req.body.characters,
            settings: req.body.settings,
            deadlines: req.body.deadlines,
            notes: req.body.notes
        })
        const book = await newBook.save();
        res.status(200).json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
        
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require("../../models/Profile");
const Writing = require("../../models/Writing")
// const User = require("../../models/User");
const { check, validationResult } = require('express-validator');
const validations = require("../../helpers/validations");

//POST api/writing
//POST writing
//Private
router.post('/', [auth, 
    [
    check('text', 'Text is required').not().isEmpty(),
    ]
], async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        const user = await User.findOne({_id: req.user.id});
        if (!user) {
            return res.status(400).json({errors: [{msg: 'No user found'}]})
        }
        const inspration = req.body.inspration ? req.body.inspration : null;
        const parent_writing = req.body.parent_writing ? req.body.parent_writing : null;
        const newWriting = new Writing({
            user: req.user.id,
            text: req.body.text,
            name: req.body.name,
            inspration: inspration,
            parent_writing: parent_writing
        })
        const writing = await newWriting.save();
        res.status(200).json(writing);
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
        
    }
});

//GET api/writing
//get all writing
//private
router.get("/", auth, async (req,res) => {
    try {
        user = await User.find({_id: req.user.id});
        if (!user) {
            return res.status(400).json({errors: [{msg: 'No user found'}]});
        }
        writings = await Writing.find().populate('user', ['first_name', 'last_name', 'profileImage']);
        res.status(200).json(writings);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//GET api/writing/:id
//get one writing
//private
router.get("/:id", auth, async (req, res) => {
    try {
        user = await User.find({_id: req.user.id});
        if (!user) {
            return res.status(400).json({errors: [{msg: 'No user account found'}]});
        }
        writing = await Writing.findOne({_id: req.params.id}).populate('user', ['first_name', 'last_name', 'profileImage']);
        res.status(200).json(writing);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
})

//Put api/writing/:id
//writer updates current writing
//private
router.put('/:id', auth, async (req, res) => {
    try {
        let writing = await Writing.findOne({_id: req.params.id}).populate('user', ['first_name', 'last_name', 'profileImage']);
        if (!writing) {
            return res.status(400).json({errors: [{msg: 'No writing found'}]});
        }
        writingFields = writing;
        writingFields.text = req.body.text;
        writingFields.title = req.body.title; 
        writingFields.updated = new Date();
        writing = await Writing.findOneAndUpdate(
            { _id: req.params.id}, 
            { $set: writingFields },
            { new: true }
            );
        return res.json(writing);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");   
    }
});


module.exports = router;
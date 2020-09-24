const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require("../../models/Profile");
const Writing = require("../../models/Writing");
const Feedback = require("../../models/Feedback");
const { check, validationResult } = require('express-validator');
const validations = require("../../helpers/validations");


//post api/feedback/writing/:id
//Teacher feedback for writing
//private
router.post('/writing/:id', [auth, 
    [
        check('text', 'Text is required').not().isEmpty(),
        ]
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const writingId = req.params.id;
        const userId = req.user.id;
        try {
            const user = await User.findOne({_id: userId});
            if (!user) {
                return res.status(400).json({errors: [{msg: 'No user found'}]});
            }
            if (!user.isTeacher && !user.isParent) {
                return res.status(400).json({errors: [{msg: 'You do not have access to write feedback'}]});
            }
            let writing = await Writing.findOne({_id: writingId}).populate('user', ['first_name', 'last_name', 'profileImage']);
            if (!writing) {
                return res.status(400).json({errors: [{msg: 'No writing found'}]});
            }
            const comments = req.body.comments.map(comment => {
                const commentObj = {
                    text: comment.text,
                    user: req.user.id
                }
                return commentObj;
            })
            console.log(comments)
            const newFeedback = new Feedback({
                user: req.user.id,
                text: req.body.text,
                name: writing.name,
                inspration:  writing.inspration,
                parent_writing: writing._id,
                isFeedback: true, 
                comments: comments
            })
            console.log(newFeedback)
            const feedback = await newFeedback.save();
            res.status(200).json(feedback);   
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
            
        }
    })
    
    
    module.exports = router;
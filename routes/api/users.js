const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/user');

//POST api/users
//REGISTER user
//public
router.post('/', [
    check('first_name', 'First Name is required').not().isEmpty(),
    check('last_name', 'Last name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6}),
    check('password', 'Passwords do not match').custom((value,{req}) => {
        if (value !== req.body.password2) {
            throw new Error("Passwords do not match");
        } else {
            return value;
        }
    })
], 
async (req, res) => {
    console.log('here', req.body)
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const { first_name, last_name, email, password} = req.body;
    const isParent = req.body.isParent ? req.body.isParent : null;
    const isTeacher = req.body.isTeacher ? req.body.isTeacher : null;
    const isStudent = req.body.isStudent ? req.body.isStudent : null;
    try {
        let user = await User.findOne({email: email})
        if (user) {
            //sending errors in the same format as above
            return res.status(400).json({errors: [{msg: 'User already exists.'}]})
        }
        user = new User({
            first_name,
            last_name,
            email,
            password,
            isParent,
            isTeacher,
            isStudent,
        })
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            { expiresIn: 36000 }, 
            (err, token) => {
                if (err) throw err;
                res.json({token})

            });
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }  
});

module.exports = router;
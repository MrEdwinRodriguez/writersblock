const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require("../../models/Profile");
// const User = require("../../models/User");
const profileController = require("../../controllers/profile");
const validations = require("../../helpers/validations");
const { check, validationResult } = require('express-validator');

//GET api/profile/myprofile
//Get current user profile
//Private
router.get('/myprofile', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({user: req.user.id}).populate('user', ['first_name', 'last_name', 'profileImage']);
        if(!profile) {
            res.status(400).json({msg: 'There is no profile for this user.'})
        }
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

});

//POST api/profile
//Create student profile for current user
//Private
router.post('/', auth, async (req, res) => {
    const { dob, favoriteGenre, bio, username, goals, grade } = req.body;
    let profileFields = {};
    profileFields.user = req.user.id;
    if (dob) {
        profileFields.dob = dob;
        profileFields.age = profileController.getAge(dob);
    }
    if (favoriteGenre) profileFields.favoriteGenre = favoriteGenre;
    if (bio) profileFields.bio = bio;
    if (username) profileFields.username = username;
    if (grade) profileFields.grade = grade;
    if (username) profileFields.username = username;
    if (validations.isArrayNotEmpty(goals)) {
        profileFields.goals = [];
        goals.map(goal => {
            const goalObj = {};
            goalObj.goal = goal;
            goalObj.isComplete = false;
            profileFields.goals.push(goalObj);
        })

    }
    try {
        
        let profile = await Profile.findOne({user: req.user.id}).populate('user', ['first_name', 'last_name', 'profileImage']);
        if(profile) {
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id}, 
                { $set: profileFields },
                { new: true }
                );
            return res.json(profile);
        } 
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

});


//GET api/profile/students
//Get all strudent profiles
//Private

router.get('/students', auth, async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['first_name', 'last_name', 'email', 'profile_image', 'isStudent'])
        const studentProfiles = profiles.filter(profile => {
            return profile.user.isStudent;
        })
        res.json(studentProfiles);
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

//GET api/profile/student/:id
//get one student profile
//Private
router.get('/student/:id', auth, async (req, res) => {
    const studentId = req.params.id;
    try {
        const profile = await Profile.findOne({_id: studentId}).populate('user', ['first_name', 'last_name', 'email', 'profile_image', 'isStudent'])
        res.status(200).json(profile); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error') 
    }
})

//GET api/profile/teachers
//Get all teacher profiles
//Private
router.get('/teachers', auth, async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['first_name', 'last_name', 'email', 'profile_image', 'isStudent'])
        const teacherProfiles = profiles.filter(profile => {
            return profile.user.isTeacher;
        })
        res.json(teacherProfiles);
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

//GET api/profile/teacher/:id
//get one teacher profile
//Private
router.get('/teacher/:id', auth, async (req, res) => {
    const teacherId = req.params.id;
    try {
        const profile = await Profile.findOne({_id: teacherId}).populate('user', ['first_name', 'last_name', 'email', 'profile_image', 'isStudent'])
        res.status(200).json(profile); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error') 
    }
})

//DELETE api/profile
//DELETE profile of any type
//Private
router.delete('/', auth, async (req, res) => {
   try {
        await Profile.findOneAndRemove({user: req.user.id});
        await User.findOneAndRemove({_id: req.user.id});
        res.status(500).send('Profile has been deleted'); 
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error')
       
   }

})

module.exports = router;
import Profile from "../models/profile.js";

export const createProfile = async (req, res) => {
    try {
        const {userId, email, education, experience, skills, interest} = req.body;
        const user = await Profile.findOne({userId: userId}).populate('userId', '-password');
        if(!user)
            return res.status(404).send('User not found');
        // console.log(userId, user);
        // console.log(email, education, experience, skills, interest);
        const newProfile = new Profile({
            userId,
            email,
            education,
            experience,
            skills,
            interest
        });
        await newProfile.save();
        res.status(201).json('create profile success');
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

export const getProfile = async (req, res) => {
    try {
        console.log(req.authData.id, req.params.id)
        const requestingUserId = req.authData.id; 
        const userId = req.params.id;
        if (requestingUserId !== userId && !req.authData.isAdmin) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        const profile = await Profile.findOne({userId: userId});
        if (!profile)
            return res.status(404).send('Profile not found');
        res.status(200).json(profile);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
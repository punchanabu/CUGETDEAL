const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('../config/db'); // Import the database module
const User = require('../models/user'); // Import the User model

router.use(express.json());

// Define the registration route
router.post('/register', async (req, res) => {
    // Access user registration data using req.body
    const { name,surname, email, password } = req.body;

    // Check if email is already in use
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(400).json({ error: 'Email is already in use' });
    } else{
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            name,
            surname,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        newUser.save()
            .then(() => {
                res.status(201).json({ message: 'User registered successfully' });
            })
            .catch((error) => {
                res.status(500).json({ error: 'User registration failed' });
            });
    }
});

module.exports = router;
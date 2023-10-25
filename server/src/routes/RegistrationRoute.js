import express from 'express';
const router = express.Router();
import {User} from '../models/user.js';
router.use(express.json());

// Define the registration route
router.post('/', async (req, res) => {

    // Access user registration data using req.body
    const { name,surname, email, password } = req.body;

    // Hash the password
    const hashedPassword = password; // TODO: Hash the password

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
});


export {router};
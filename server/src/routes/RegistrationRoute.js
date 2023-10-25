const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Import the user controller



router.use(express.json());

// Define the registration route
router.post('/register', async (req, res) => {

    // Access user registration data using req.body
    const { name,surname, email, password } = req.body;

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
});


module.exports = router;
import User from '../models/user.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// Define the registration route
export const registerUser = async (req, res) => {
    const { name,surname, email, password } = req.body;

    if (name === undefined || surname === undefined || email === undefined || password === undefined) {
        return res.status(400).json({ message: 'Invalid format'});
    }
    // check if the email already exists
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
        return res.status(400).json({ message: 'User already exists' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        name,
        surname,
        email,
        password: hashedPassword
    })
    // console.log(newUser)

    // Save the user to the database
    try {
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (email === undefined || password === undefined) {
        return res.status(400).json({ message: 'Invalid format'});
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign(
            { id: user._id, name: user.name, surname: user.surname, email: user.email }, 
            'secretkey007', // TODO: Change this to an environment variable 
            { expiresIn: '24h' } 
        );
        // Create session or token for authentication...
        res.status(200).json({ message: 'Login successful', token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
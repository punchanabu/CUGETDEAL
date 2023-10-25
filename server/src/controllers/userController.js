import User from "../models/user.js"; // Import the User model

/** @type {import("express").RequestHandler} */
export const registerUser = async (req, res) => {
  const { name, surname, email, password } = req.body;

  // Implement input validation here if needed

  try {
    // Check if the email is already in use
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

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
    await newUser.save();
    
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'User registration failed' });
  }
};

module.exports = {
  registerUser
};
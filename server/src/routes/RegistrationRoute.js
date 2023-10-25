const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Import the user controller

router.post('/register', userController.registerUser);

module.exports = router;
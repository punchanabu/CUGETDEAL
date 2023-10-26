import express from 'express';
import * as User from '../controllers/userController.js';
const loginRouter = express.Router();

loginRouter.use(express.json());

// Define the registration route
loginRouter.post('/', User.loginUser);

export default loginRouter;
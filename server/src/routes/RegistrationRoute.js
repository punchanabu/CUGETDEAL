import express from 'express';
import * as User from '../controllers/userController.js';
const registerRouter = express.Router();

registerRouter.use(express.json());

// Define the registration route
registerRouter.post('/', User.registerUser);

export default registerRouter;
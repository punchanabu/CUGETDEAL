import express from 'express';
import verifyToken from '../controllers/authMiddleware.js';
import { getUserId } from '../controllers/getUserId.js';

const userIdRouter = express.Router();

userIdRouter.use(express.json());

userIdRouter.post('/', verifyToken, getUserId); 

export default userIdRouter;
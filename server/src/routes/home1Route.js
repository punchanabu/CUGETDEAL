import express from 'express';
import * as Home1 from '../controllers/home1Controller.js';
import verifyToken from '../controllers/authMiddleware.js';

const home1Router = express.Router();
home1Router.use(express.json());

home1Router.post('/', verifyToken, Home1.create);
home1Router.get('/:userId', verifyToken, Home1.getbyID);
home1Router.get('/', verifyToken, Home1.getAll);

export default home1Router;
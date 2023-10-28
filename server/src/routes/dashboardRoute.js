import express from 'express';
import * as Dashboard from '../controllers/dashboardController.js';
import verifyToken from '../controllers/authMiddleware.js';

const dashboardRouter = express.Router();
dashboardRouter.use(express.json());

dashboardRouter.post('/', verifyToken, Dashboard.create);
dashboardRouter.get('/:userId', verifyToken, Dashboard.getbyID);

export default dashboardRouter;
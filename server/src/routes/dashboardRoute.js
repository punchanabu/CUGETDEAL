import express from 'express';
import * as Dashboard from '../controllers/dashboardController.js';
import verifyToken from '../controllers/authMiddleware.js';
import Home1 from '../models/home1.js'; // Adjust the path based on your project structure
const dashboardRouter = express.Router();
dashboardRouter.use(express.json());

dashboardRouter.post('/', verifyToken, Dashboard.create);
dashboardRouter.get('/:userId', verifyToken, Dashboard.getbyID);
dashboardRouter.put('/', verifyToken, Dashboard.update);
dashboardRouter.delete('/', verifyToken, Dashboard.remove);
dashboardRouter.delete('/creator', verifyToken, Dashboard.deleteTask);
export default dashboardRouter;
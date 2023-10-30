import express from 'express';
import cors from 'cors';
import registerRouter from './routes/RegistrationRoute.js';
import loginRouter from './routes/LoginRoute.js';
import dashboardRouter from './routes/dashboardRoute.js';
import home1Router from './routes/home1Route.js';
import userIdRouter from './routes/userIdRoute.js';
const app = express();

app.use(cors());

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);
app.use('/home1', home1Router);
app.use('/getUserId', userIdRouter);


export default app;
import express from 'express';
import cors from 'cors';
import registerRouter from './routes/RegistrationRoute.js';
import loginRouter from './routes/LoginRoute.js';
import dashboardRouter from './routes/dashboardRoute.js';
import getUserIdRouter from './routes/userIdRoute.js';
const app = express();

app.use(cors());

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);
app.use('/getUserId', getUserIdRouter);

export default app;
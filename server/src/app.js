import express from 'express';
import cors from 'cors';
import registerRouter from './routes/RegistrationRoute.js';
import loginRouter from './routes/LoginRoute.js';
const app = express();

app.use(cors());

app.use('/register', registerRouter);
app.use('/login', loginRouter);

export default app;
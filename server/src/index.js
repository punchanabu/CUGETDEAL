import express from 'express';
import cors from 'cors';
import router from './routes/RegistrationRoute.js';

// Connect to MongoDB
const app = express();

app.use(cors());

app.use('/register', router);

app.listen(3222,"0.0.0.0", () => {
    console.log('Server is running on port 3222');
});

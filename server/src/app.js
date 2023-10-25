// Use ES6 import
import express from 'express';
import cors from 'cors';
import router from './routes/RegistrationRoute';
const app = express();
app.use(cors());
app.use('/register', router);

app.listen(3222, () => {
    console.log('Server is running on port 3222');
});

import './config/db.js';
import app from './app.js';
// Connect to MongoDB

app.listen(3222,"0.0.0.0", () => {
    console.log('Server is running on port 3222');
});

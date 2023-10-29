import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/env.js';

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader);
    if (bearerHeader) {
        const token = bearerHeader.split(' ')[1];
        jwt.verify(token, SECRET_KEY, (err, authData) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden' }); 
            }
            req.authData = authData;
            next();
        });
    } else {
        return res.status(403).json({ message: 'Unauthorized' }); 
    }
}

export default verifyToken;

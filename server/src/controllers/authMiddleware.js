import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/env.js';

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    // console.log(bearerHeader)
    if (bearerHeader) {
        const token = bearerHeader.split(' ')[1];
        jwt.verify(token, SECRET_KEY, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                req.authData = authData;
                req.authData.isAdmin = false;
                next();
            }
        });
    } else {
        res.sendStatus(403).json({ message: 'Unauthorized' });
    }
}

export default verifyToken;

// Middleware for handling auth
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization.split(" ");
    const jwtToken = token[1]

    try {
        const decodedValue = jwt.verify(jwtToken, jwtPassword);
        if (decodedValue.username) {
            req.username = decodedValue.username; 
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch(e) {
        res.json({
            msg: "Incorrect inputs"
        })
    }

}

module.exports = userMiddleware;
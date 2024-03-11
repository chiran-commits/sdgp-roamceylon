const jwt = require('jsonwebtoken');
require('dotenv').config();

// const verifyJWT = (req, res, next) => {
//     const authHeader = req.headers.authorization || req.headers.Authorization;
//     if (!authHeader) {
//         return res.sendStatus(401);
//     }
//     console.log(authHeader);
//     const token = authHeader.split(' ')[1];


//     jwt.verify(authHeader, process.env.ACCESS_TOKEN, (err, user) => {
//         if (err) {
//             return res.sendStatus(403);
//         }
//         next();
//     });


const verifyUser = (req, res, next) => {

    const token = req.headers.authorization || req.headers.Authorization;

    console.log(token);
    if (!token) {

        res.status(404).json({ message: "The token was not found" });

    }
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) {
            return res.status(400).json({ message: "User token is invalid" });
        }
        console.log(user.email);
        req.email = user.email;
        next();
    });
    
};

module.exports = verifyUser;
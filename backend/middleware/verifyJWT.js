const jwt = require('jsonwebtoken');
require('dotenv').config();
//the function is a middleware function that is used to verify the user's token token when acessing protected routes

const verifyUser = (req, res, next) => {

    const header = req.headers.authorization;
    console.log(header);
    const token =header.split(' ')[1]

    console.log(token);
    if (!token) {

        res.status(404).json({ message: "The token was not found" });

    }
    //verify the token using the secret code if the jwt is valid

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
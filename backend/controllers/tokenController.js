const jwt = require('jsonwebtoken');
const userModel = require('../database/userModel');

const refreshToken = async(req, res) => {
    
    try{
        const cookie = req.cookies; 

    }catch(error){
        return res.sendStatus(401);
    }
    
    const token = cookie.token;
    console.log(token);
    // const user =await userModel.findOne({refreshToken:token});
    // if (!user){
    //     return res.sendStatus(403);
    // }

    jwt.verify(token, process.env.REFRESH_TOKEN, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        console.log(user.email)
        const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN, { expiresIn: '30s' });
        res.json({ accessToken });
    });


    
}

module.exports = refreshToken;
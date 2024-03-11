const userModel = require('../database/userModel');
const { encryptPassword, comparePassword } = require('../security/encrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();



const registerUser = async (req, res) => {
    console.log(req.body);

    const { firstName, lastName, email, password } = req.body
    const encyptedPassword = await encryptPassword(password)
    console.log(encyptedPassword)

    const emailExists = await userModel.findOne({ email: email })
    if (emailExists) {
        return res.status(400).json({ error: 'Email already exists' })
    }

    const user = userModel.create({ firstName, lastName, email, encyptedPassword })
    return res.json(user)

}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email })
        console.log(user);
        if (!user) {   
            return res.status(500).json({ error: 'User not found!' })
        }
        //checking if the passwords match
        const userPassword = await comparePassword(password, user.encyptedPassword)
        console.log(userPassword);

        if (userPassword) {
            const refreshToken = jwt.sign({ email: email }, process.env.REFRESH_TOKEN, { expiresIn: '1d' });
            const acessToken = jwt.sign({ email: email }, process.env.ACCESS_TOKEN, { expiresIn: '30s' });

            res.cookie('token',refreshToken, { 
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24,
                //  secure : true,
                //  sameSite: 'None',
                //  path: '/'
            });
            // user.refreshToken = token;
            // await user.save();
            res.json({ "token": acessToken});


        } else {
            return res.status(400).json({ error: 'Password not Matched!' });
        }

    }
    catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

module.exports = { registerUser, loginUser }
const userModel= require('../database/userModel');
const {encryptPassword, comparePassword} = require('../security/encrypt');



const registerUser=async(req,res)=>{
    console.log(req.body);

    const {firstName,lastName,email,password}=req.body
    const encyptedPassword=await encryptPassword(password)
    console.log(encyptedPassword)

    const emailExists=await userModel.findOne({email:email})
    if(emailExists){
        return res.status(400).json({error:'Email already exists'})
    }

    const user=userModel.create({firstName,lastName,email,encyptedPassword})
    return res.json(user)





}
const loginUser = async(req, res) => {
 try{
    const {email, password} = req.body;
    //checking if the user exists
    const user = await userModel.findOne({email});
    if (!user){
        return res.status(500).json({error:'User not found!'})

    }
    

    //checking if the passwords match
    const userPassword = await comparePassword(password, user.encyptedPassword)
    console.log(userPassword);

    if (userPassword) {
        const accessToken = jwt.sign({ email: email }, process.env.ACCESS_TOKEN, { expiresIn: '30s' });
        const refreshToken = jwt.sign({ email: email }, process.env.ACCESS_TOKEN,{ expiresIn: '1d' });
        res.cookie('token', refreshToken, { httpOnly: true,sameSite:'None',secure:true,maxAge: 1000*60*60*24 });
        user.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);
        
        res.json({accessToken});

        
    } else {
        return res.status(400).json({ error: 'Password not Matched!' });
    }
  
}
 catch (error){
    return res.status(400).json(error)
 }
}

module.exports={registerUser, loginUser}
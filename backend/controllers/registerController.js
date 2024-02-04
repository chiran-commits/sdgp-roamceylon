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
    const user = await User.findOne({email});
    if (!user){
        return res.json({
            error: "User not found!"
        })
    }

    //checking if the passwords match
    const userPassword = await comparePassword(password, user.password) 
    if (userPassword){
        res.json("Password Matched")
    }
    if (!userPassword){
        res.json({
            error: "Password not matched"
        })
    }
}
 catch (error){
    console.log(error)
 }
}

module.exports={registerUser, loginUser}
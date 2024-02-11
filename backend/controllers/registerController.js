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
    console.log(userPassword)
     
    if (userPassword){
        const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN);
        res.cookie('token', token, { httpOnly: true });
        return res.status(200).json({message:'Password matched!'})
    }
    else{
        return res.status(400).json({error:'Password not Matched!'})
    }
  
}
 catch (error){
    return res.status(400).json(error)
 }
}

module.exports={registerUser, loginUser}
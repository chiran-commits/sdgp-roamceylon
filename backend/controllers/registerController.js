const userModel= require('../database/userModel');
const {encryptPassword} = require('../security/encrypt');



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
module.exports={registerUser}
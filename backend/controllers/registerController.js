const userModel= require('../database/userModel');
const {encryptPassword} = require('../security/encrypt');


const registerUser=async(req,res)=>{
    console.log(req.body);

    const {firstName,lastName,email,password}=req.body
    const encyptedPassword=await encryptPassword(password)
    console.log(encyptedPassword)
    

    const user=userModel.create({firstName,lastName,email,encyptedPassword})
    res.send(user)





}
module.exports=registerUser
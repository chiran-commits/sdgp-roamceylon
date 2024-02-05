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
<<<<<<< Updated upstream
        return res.status(500).json({error:'User not found!'})

=======
        return res.status(400).json({
            error: "User not found!"
        })
>>>>>>> Stashed changes
    }
    

    //checking if the passwords match
    const userPassword = await comparePassword(password, user.encyptedPassword)
    console.log(userPassword)
     
    if (userPassword){
<<<<<<< Updated upstream
        return res.status(500).json({error:'Password matched!'})
    }
    if (!userPassword){
        return res.status(400).json({error:'Password not Matched!'})
=======
        return res.json({mesage:'Login successful'})
    }
    if (!userPassword){
        res.status(400).json({
            error: "Password not matched"
        })
>>>>>>> Stashed changes
    }
}
 catch (error){
    return res.status(400).json(error)
 }
}

module.exports={registerUser, loginUser}
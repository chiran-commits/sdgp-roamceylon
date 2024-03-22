const userModel= require('../database/userModel');

const saveUser=async(req,res)=>{
    const {firstName, lastName, Age,email }=req.body;
    console.log(firstName, lastName, Age,email);
    let user;
    try {
        user=await userModel.findOneAndUpdate({email:email},req.body)
        console.log(user);
    } catch (err) {
        console.log(err);
        return res.status(404).json({ messsage: "Error fetching data" });
    }
    if (!user) {
        console.log("user not found");
      return res.status(404).json({ messsage: "user not found"});
    }
  
   
    

    return res.status(200)
 
}

module.exports = saveUser;
const userModel= require('../database/userModel');

//the function is used to update the user infomation
const saveUser=async(req,res)=>{
    const {firstName, lastName, Age,email }=req.body;
    console.log(firstName, lastName, Age,email);
    let user;
    try {
        //the user object is found using the email and the attributes are updated
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
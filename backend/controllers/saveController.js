const userModel= require('../database/userModel');

const saveUser=async(req,res)=>{
    console.log("hi")
    const {firstName, lastName, Age,email }=req.body;
    console.log(firstName, lastName, Age,email);
    let user;
    try {
        user=await userModel.findOne({email:email})
        console.log(user);
    } catch (err) {
        console.log(err);
        return res.status(404).json({ messsage: "Error fetching data" });
    }
    if (!user) {
        console.log("user not found");
      return res.status(404).json({ messsage: "user not found"});
    }
    try{
        user.Age=Age;
        user.firstName=firstName;
        user.lastName=lastName;
        user.save();

    }catch(err){
        console.log(err);
        return res.status(400).json({ messsage: "Error saving data" });
    }
  
   
    

    return res.status(200)
 
}

module.exports = saveUser;
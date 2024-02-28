const userModel= require('../database/userModel');

const sendUser=async(req,res)=>{
    const email = req.email;
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
    return res.status(200).json({ user });

  
}

module.exports = {sendUser};
const userModel= require('../database/userModel');

const deleteUser = async (req, res) => {
    // const {firstName, lastName, Age,email }=req.body;
    // console.log("Deleting user: " + firstName, lastName);
    // let user;
    // try{
    //     user=await userModel.deleteOne({email:email},req.body);
    //     console.log("Deleted " = user);
    // }catch(err){
    //     console.log(err);
    //     return res.status(404).json({ messsage: "Error when deleting user" });
    // }
    // return res.status(200);


    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email })
    console.log(user);
    if (!user) {   
        return res.status(500).json({ error: 'User not found!' })
    }
    //checking if the passwords match
    const userPassword = await comparePassword(password, user.encyptedPassword)
    console.log(userPassword);

    if (userPassword) {
        user=await userModel.deleteOne({email:email},req.body);
    } else {
        return res.status(400).json({ error: 'Password not Matched!' });
    }
}

module.exports = deleteUser;
const Review= require('../database/reviewModel');

const addReview=async(req,res)=>{
    console.log(req.body);


    const {name,location,review,rating}=req.body

    // const emailExists=await userModel.findOne({email:email})
    // if(emailExists){
    //     return res.status(400).json({error:'Email already exists'})
    // }
    console.log(name)

    const user=Review.create({name,location,review,rating})
    return res.json(user)
    





}

module.exports={addReview}
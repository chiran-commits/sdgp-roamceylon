const mongoose = require('mongoose')
 const connectDB=async()=>{
    try{
        const conn =await mongoose.connect('mongodb+srv://roamceylon:lucky@cluster0.bgvxcvu.mongodb.net/UserData?retryWrites=true&w=majority')
        console.log(`MongoDB connected`)
    }catch(error){
        process.exit(1)


    }

}

module.exports=connectDB
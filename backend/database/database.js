const mongoose = require('mongoose')
require('dotenv').config();
 const connectDB=async()=>{
    try{
        const conn =await mongoose.connect(process.env.DATABASE)
        console.log(`MongoDB connected`)
    }catch(error){
        process.exit(1)


    }

}

module.exports=connectDB
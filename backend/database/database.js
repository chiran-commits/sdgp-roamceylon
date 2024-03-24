const mongoose = require('mongoose')
//the function is used to connect to the database
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
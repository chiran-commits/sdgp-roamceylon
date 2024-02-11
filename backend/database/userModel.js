const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email:{
        type:String
    },
    encyptedPassword: String,
    refreshToken: String
    
})


module.exports = mongoose.model('users', userSchema);
const express = require('express');
const router =express.Router();
const {registerUser, loginUser} = require('../controllers/registerController');
const cors = require('cors');

router.use(cors(
    {
        origin: 'http://localhost:8000',
        credentials: true
    }

))

router.get('/',(req,res)=>{
    res.send('Hello World')
})

router.post('/register',registerUser)
router.post('/login', loginUser)

router.post('/keywords',(req,res)=>{
    
    res.send('keywords')
})




module.exports=router
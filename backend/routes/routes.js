const express = require('express');
const router =express.Router();
const {registerUser, loginUser} = require('../controllers/registerController');
const {addReview,sendReview}= require('../controllers/reviewController');
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
router.post("/review",addReview)
router.get("/review",sendReview)

router.post('/keywords',(req,res)=>{
    res.send('keywords')
})




module.exports=router
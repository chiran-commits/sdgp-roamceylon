const express = require('express');
const router =express.Router();
const verifyUser = require('../middleware/verifyJWT');
const {registerUser, loginUser} = require('../controllers/registerController');
const {addReview,sendReview}= require('../controllers/reviewController');
const refresh= require('../controllers/refresnController');



const {sendUser}=require('../controllers/usersController');
const cors = require('cors');




router.use(cors(
    {
        origin: 'http://localhost:8000',
        credentials: true
    }

))


router.post('/register',registerUser)
router.post('/login', loginUser)
router.post("/review",addReview)
router.get("/review",sendReview)
router.get('/user',verifyUser,sendUser)

router.get('/refresh',verifyUser,refresh)

router.post('/keywords',(req,res)=>{
    res.send('keywords')
})




module.exports=router
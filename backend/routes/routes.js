const express = require('express');
const router =express.Router();
const verifyUser = require('../middleware/verifyJWT');

const {registerUser, loginUser} = require('../controllers/registerController');
const {addReview,sendReview}= require('../controllers/reviewController');

const saveUser=require('../controllers/saveController');
const {sendUser}=require('../controllers/usersController');
const deleteUser = require('../controllers/deleteController');
const cors = require('cors');


router.get('/',(req,res)=>{
    res.send('welcome to roamceylon')
})

router.post('/register',registerUser)
router.post('/login', loginUser)
router.post("/review",addReview)

router.patch('/save',saveUser)

router.get("/review",sendReview)
router.get('/user',verifyUser,sendUser)
router.delete('/delete', deleteUser)





module.exports=router
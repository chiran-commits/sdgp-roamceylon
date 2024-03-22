const express = require('express');
const router =express.Router();
const axios = require('axios');
const verifyUser = require('../middleware/verifyJWT');

const {registerUser, loginUser} = require('../controllers/registerController');
const {addReview,sendReview}= require('../controllers/reviewController');
const refresh= require('../controllers/refresnController');
 


const saveUser=require('../controllers/saveController');
const {sendUser}=require('../controllers/usersController');
const cors = require('cors');




router.post('/register',registerUser)
router.post('/login', loginUser)
router.post("/review",addReview)

router.patch('/save',saveUser)

router.get("/review",sendReview)
router.get('/user',verifyUser,sendUser)

router.get('/refresh',refresh)



module.exports=router
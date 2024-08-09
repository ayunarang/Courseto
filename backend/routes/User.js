const express= require('express')
const router=express.Router();

const { login, register, verifyOTP, sendOTP , getUserData } = require('../controllers/Auth.js');
const verifyToken = require('../middleware/verifyToken.js');

router.post('/login-user',login)

router.post('/signup-user', register)

router.post('/sendotp', sendOTP)

router.post('/verifyotp', verifyOTP)

router.get('/getUser',verifyToken, getUserData)

module.exports = router;
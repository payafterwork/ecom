const express = require('express')
const router = express.Router()

const {signup} = require('../controllers/user');
const {userSignupValidator} =  require('../validtor')

router.post('/signup', userSignupValidator, signup);


module.exports = router;



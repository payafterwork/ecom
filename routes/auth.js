const express = require('express')
const router = express.Router()

const {signup, signin, signout, requireSignin} = require('../controllers/auth');
const {userSignupValidator} =  require('../validator')


//use requireSignin on any of these routes to make them auth protected.
router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);


module.exports = router;



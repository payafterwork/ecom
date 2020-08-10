const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

const { userById } = require('../controllers/user');

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
  //requireSignin - need to be signed in to view profile (any profile can be viewed if signed in )
  //isAuth - need to be that person only who's id is being viewed (only own profile)
  //isAdmin - needs to admin to view profile
    res.json({
        user: req.profile
    });
});

router.param('userId', userById); // Any time we have userID as parameter this userById function in controller will be invoked

module.exports = router;
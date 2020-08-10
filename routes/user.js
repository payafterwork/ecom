const express = require('express');
const router = express.Router();

const { requireSignin } = require('../controllers/auth');

const { userById } = require('../controllers/user');

router.get('/secret/:userId', requireSignin, (req, res) => { //need to be signed in to view profile
    res.json({
        user: req.profile
    });
});

router.param('userId', userById); // Any time we have userID as parameter this userById function in controller will be invoked

module.exports = router;
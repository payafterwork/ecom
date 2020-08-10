const express = require('express');
const router = express.Router();

const { create, productById, read, remove,update} = require('../controllers/product');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/product/:productId',read);
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);
router.delete("/product/:productId/:userId", 
	//userID to verify product is deleted by someone who added it or admin
    requireSignin,
    isAuth,
    isAdmin,
    remove
);

router.put( // put method is used for update
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update
);

router.param('userId', userById);
router.param("productId", productById);


module.exports = router;
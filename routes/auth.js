var express = require('express');
var router = express.Router();
var userCtrl = require('../controller/user.js')
var passport = require("passport");


router.post('/signup', userCtrl.createUser);
router.post('/login', userCtrl.passAuthenticate);
router.post('/logout', userCtrl.logout)
router.post('/fbLogin', userCtrl.fbLogin)
module.exports = router;
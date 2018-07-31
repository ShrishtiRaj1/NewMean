var express = require('express');
var userModel = require('../model/user.js');
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;


/**
 * [createUser new user Registration]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */

module.exports.createUser = async function(req, res){
	var user = await userModel.findUser({email:req.body.email});
	if(!user && user == null){
		var signUser = new userModel({
			name:req.body.name,
			email:req.body.email,
			password:req.body.password
		});
		var newuser = await userModel.insertUser(signUser);
		if(newuser){
			res.status(200).json({"message":"User successfully register", "user": newuser})
		}
		
	}else{
		res.status(500).json({"message":"Email Id already exists"})	
	}
}

/**
 * [passAuthenticate authenticate user using passport-local]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
module.exports.passAuthenticate = async function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) {res.status(200).json({"message":"Invalid password"}) }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      res.status(200).json({"messgae":"successfully loggId", "data": user})
      // return res.redirect('/users/' + user.name);
    });
  })(req, res, next);
}

/**
 * [logout description]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
module.exports.logout = async function (req, res) {
	req.logout();
	res.status(200).json({message:"successfully LogOut"})
}

/**
 * [description]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
module.exports.fbLogin = async function(req, res){

}



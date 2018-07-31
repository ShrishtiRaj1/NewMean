 var LocalStrategy = require('passport-local').Strategy;
 var  FacebookStrategy = require('passport-facebook').Strategy;
 var userModel = require('./model/user.js');
 var configAuth = require('./config');


 module.exports = function(passport){
    console.log("passport", passport)
 	// used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
    	console.log("user in deserialize", id)
        done(null, id);
    });
    /* Local login using passport*/
    passport.use(new LocalStrategy(
      function(username, password, done) {
        userModel.findUser({email: username }, function (err, user) {
        if (err) { return done(err); }
          if (!user) {
            return done(null, false);
          }
          if (user && !validPassword(password, user.password)) {
            return done(null, false);
          }
          return done(null, user);
        });
      }
    ));
    function validPassword(password , userPass){
        console.log("validPassword", password, userPass)
        if(password == userPass){
            return true;
        }else{
            return false;
        }
    }


    /*facebook login using passport*/

    passport.use(new FacebookStrategy(
        function()
        ))
}
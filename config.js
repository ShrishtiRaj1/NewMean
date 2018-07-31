module.exports = {

    'facebookAuth' : {
        "app_id":"290384941515930",
        "app_secret":"e4f473a108032427352f9f504891e72e",
        "callback":"http://localhost:8000/fbLogin"
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};

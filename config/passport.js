var passport = require('passport')
,	FacebookStrategy = require('passport-facebook').Strategy
,	GoogleStrategy = require('passport-google').Strategy
, 	mongoose = require('mongoose')
,	FB = require('fb');

module.exports = function(){
	var Cliente = mongoose.model('Cliente');

	passport.use(new FacebookStrategy({
		  // WEB
    	// clientID: "452748608250756",
    	// clientSecret: "e977bd87ee03c33d8424405b6443896e",
     //  callbackURL: "http://ibpay.co/auth/facebook/callback"    	

      //Local
      clientID: "894261524014402",
      clientSecret: "beb0cf51db053f6fe51f7c8cb3b16c0e",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
  	},
  	function(accessToken, refreshToken, profile, done) {
	  	var dadosUsuario = null;
		FB.setAccessToken(accessToken);

		FB.api('/me', 'GET', {"fields":"id,name,devices,age_range,picture"},
		  function(response) {
		      dadosUsuario = response;
  		      console.log(dadosUsuario.picture.data.url); 
		      Cliente.findOrCreate({id: dadosUsuario.id}, {id: dadosUsuario.id, nome: dadosUsuario.name, devices: dadosUsuario.devices, faixaetaria: dadosUsuario.age_range, foto: dadosUsuario.picture.data.url}, function(erro, cliente){
			  		if(erro){
			  			console.log(erro);
			  			return done(erro);
			  		}
			  		return done(null, cliente);
			  	});

		  }
		);
  	}));
	
  	passport.serializeUser(function(cliente, done){
  		console.log(cliente);
  		done(null, cliente._id);
  	});

  	passport.deserializeUser(function(id, done){
  		Cliente.findById(id).exec()
  			.then(function(cliente){
  				done(null, cliente);
  			});
  	});
};
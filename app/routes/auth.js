var passport = require('passport');

module.exports = function(app){
	app.get('/auth/facebook', passport.authenticate('facebook'));
	app.get('/auth/facebook/callback', passport.authenticate('facebook', {
		successRedirect: '/app/#/app/categorias'
	}));

	app.get('/auth/google', passport.authenticate('google'));
	app.get('/auth/google/callback', passport.authenticate('google', {
		successRedirect: '/app/#/categorias', failureRedirect: '/login'
	}));
}
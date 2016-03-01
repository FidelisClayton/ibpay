module.exports = function(app) {
	var home = app.controllers.home;

	app.route('/entrar')
		.get(home.login);

	app.route('/')
		.get(home.home);

	app.route('/authentication')
		.post(home.auth);

	app.get("/logout",home.logout);
}
module.exports = function(app) {
	var controller = {};
	var Usuario = app.models.usuario;
	var md5 = require('md5');

	controller.home = function(req, res) {
		if(!req.session.usuario) {
			res.redirect("/entrar");
		}
		var usuario = req.session.usuario;
		var params = {usuario:usuario};

		res.render("index",params);
	};
	controller.login = function(req, res) {
		res.render("login");
	};
	controller.logout = function(req, res) {
		req.session.destroy();
		res.redirect("/entrar");
	};
	controller.auth = function(req, res) {
		var cpf = req.body.cpf;
		var password = md5(req.body.password);

		if(cpf && password) {
			Usuario.findOne({cpf:cpf,password:password}).exec()
				.then(function(usuario) {
					if(usuario) {
						req.session.usuario = usuario.nome;
						res.redirect("/");
					}else {
						res.redirect("/entrar");
					}
					
				},function(error) {
					console.log("nao foi");
					res.status(500).send('Not Acceptable');
				});
		}
	};

	return controller;
}
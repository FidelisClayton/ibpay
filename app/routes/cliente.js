module.exports = function(app) {
	var controller = app.controllers.cliente;
	
	function verificaAutenticacao(req, res, next) {
		if(req.session.passport != undefined){
			if(req.session.passport.user){
				console.log('Usuário autenticado');
				return next();
			} else{
				res.status('403').json('Não autorizado');
			}
		} else{
			res.status('401').send('Não autorizado');
		}
	}

	app.route("/cliente")
		.get(controller.getCliente);
		
	app.route("/cliente/:id")
		.get(controller.getClienteById);
}
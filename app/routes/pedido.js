module.exports = function(app) {
	var controller = app.controllers.pedido;
	
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

	app.route("/pedidos")
		.get(verificaAutenticacao, controller.getPedidos)
		.post(verificaAutenticacao, controller.postPedido);

	app.route("/pedido/:id")
		.get(controller.getPedidoById) 
		.put(controller.putPedido);

	app.route("/pedidos/:cliente")
		.get(controller.getPedidoByUser);
}
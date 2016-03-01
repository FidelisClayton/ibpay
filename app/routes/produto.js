
module.exports = function(app){
	
}
module.exports = function(app){
	var Produto = app.models.produto;
	var controller = app.controllers.produto;

	function verificaAutenticacao(req, res, next) {
		console.log(req.session);
		if(req.session.passport != undefined){
			if(req.session.passport.user){
				console.log('Usuário autenticado');
				return next();
			} else{
				console.log('Tem session.')
				res.status('403').json('Não autorizado');
			}
		} else{
			console.log('Não tem session.')
			res.status('401').send('Não autorizado');
		}
	}

	app.route('/produtos')
		.get(verificaAutenticacao, controller.getProdutos)
		.post(verificaAutenticacao, controller.postProduto);

	app.route('/produto/:id')
		.put(verificaAutenticacao, controller.putProduto)
		.delete(verificaAutenticacao, controller.deleteProduto)
		.get(verificaAutenticacao, controller.getProduto);

	app.route('/produtos/:categoria')
		.get(controller.getProdutosByCategoria);

};
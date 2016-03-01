module.exports = function(app){
	var Cliente = app.models.cliente;
	var controller = {};

	controller.getClienteById = function(req, res){
		Cliente.findOne({_id: req.params.id}).exec()
			.then(function(cliente){
				res.status(200).send(cliente)
			}, function(error){
				res.status(404).send({mensagem: 'Cliente não encontrado'});
			});
	};

	controller.getCliente = function(req, res){
		if(req.session.passport != undefined){
			if(req.session.passport.user){
				Cliente.findOne({_id: req.session.passport.user}).exec()
					.then(function(cliente){
						res.status(200).send(cliente)
					}, function(error){
						res.status(404).send({mensagem: 'Cliente não encontrado'});
					});
			} else{
				res.status('403').json('Não autorizado');
			}
		} else{
			res.status('401').send('Não autorizado');
		}
	}

	return controller;
}
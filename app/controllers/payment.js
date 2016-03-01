module.exports = function(app){
	var controller = {};
	var Pedido = app.models.pedido;
	var request = require('request');
	var data = {};

	controller.pagarPedidos = function(req, res){
		console.log(req.body);
		
		var data = {
			api_key: 'ak_test_2dqbIBCpqQJ6Q5gH75YXLy1iYISbFD'
		,	amount: req.body.amount
		,	card_hash: req.body.card_hash
		};

		request.post('https://api.pagar.me/1/transactions',
		{form: data}, function(error, response, body){
			if(!error && response.statusCode == 200){
				//console.log(body);
				Pedido.update({cliente: req.body.cliente, status: false}, {status: true}, {multi: true}, 
				function(err, numAffected){
					if(!err){
						console.log(numAffected);
						res.status(200).send({message: 'Pagamento efetuado com sucesso.'});
					} else{
						console.log(err);
						res.status(500).send({message: 'Falha ao realizar pagamento.'});
					}
				});

			} else{
				console.log(error);
			}
		});
	};

	return controller;
};
module.exports = function(app){
	var moment = require('moment');
	var Pedido = app.models.pedido;
	var Produto = app.models.produto;
	var Cliente = app.models.cliente;
	var controller = {};

	controller.getPedidos = function(req, res){
		Pedido.find().exec()
			.then(function(pedidos){
				res.json(pedidos);
			}, function(error){
				res.status(500).json(error);
			});
	};
	controller.postPedido = function(req, res) {
		console.log(req.body);
		Pedido.create(req.body)
			.then(function() {				
				res.status(201).send({mensagem:"Pedido efetuado com sucesso."});
			},function(error) {
				res.status(500).json(error);
			});
	};
	controller.getPedidoById = function(req, res) {
		Pedido.findOne({_id: req.params.id}).exec()
			.then(function(pedido) {
				res.json(pedido);
			}, function(error) {
				res.status(500).json(error);
			});
	};
	controller.putPedido = function(req, res) {
		Pedido.findByIdAndUpdate(id , req.body).exec()
			.then(function(pedido) {
				res.json(pedido);
			}, function(error) {
				res.status(500).json(error);
			});
	};

	controller.getPedidoByUser = function(req, res){
		Pedido.find({cliente: req.params.cliente, status: false}).populate('produto').exec()
			.then(function(pedidos){
				var total = 0;

				res.json({pedidos: pedidos});
			}, function(error){
				res.status(404).send({message: 'Falha ao listar seus pedidos. Tente novamente.'})
			});

	controller.pagarPedidos = function(req, res){
		Pedido.update({cliente: req.params.cliente, status: false}, {status: true}, {multi: true}, 
			function(err, numAffected){
				if(!err){
					console.log(numAffected);
					res.status(200).send({message: 'Pagamento efetuado com sucesso.'});
				} else{
					console.log(err);
					res.status(500).send({message: 'Falha ao realizar pagamento.'});
				}
			});
	}

	};

	return controller;
}
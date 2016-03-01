module.exports = function(app){
	var Produto = app.models.produto;

	var controller = {};

	controller.getProdutos = function(req, res){
		Produto.find().exec()
			.then(function(produtos){
				res.json(produtos);
			}, function(error){
				res.status(500).json(error);
			});
	};

	controller.getProdutosByCategoria = function(req, res){
		Produto.find({categoria: req.params.categoria}).exec()
			.then(function(produtos){
				res.status(200).send(produtos);
			}, function(error){
				res.status(500).json(error);
			});
	};

	controller.getProdutos = function(req, res){
		Produto.find().exec()
			.then(function(produtos){
				res.status(200).send(produtos);
			}, function(erro){
				console.log(erro);
				res.status(500).send({mensagem: 'Não foi possível listar os produtos', erro: erro});
			})
	};

	controller.postProduto = function(req, res) {
		Produto.create(req.body)
		 	.then(function() {
		 		res.status(201).send({mensagem:"Produto cadastrado com sucesso."});
		 	},function(error){
		 		console.log(error);
		 		res.status(500).send({mensagem:"Falha ao cadastrar produto." , erro: error});
		 	});
	};

	controller.putProduto = function(req, res) {
		Produto.findByIdAndUpdate(req.params.id , req.body).exec()
			.then(function(produto){
				res.status(200).send({mensagem: "Produto atualizado com sucesso", produto: produto});
			}, function(erro){
				res.status(500).send({mensagem: "Falha ao atualizar produto.", erro: erro});
			});
	};

	controller.deleteProduto = function(req, res) {
		Produto.remove({_id: req.params.id}).exec()
			.then(function() {
				res.status(200).send({mensagem:"Produto removido com sucesso."});
			},function(error) {
				res.status(500).send({mensagem:"Falha ao remover produto."});
			});
	};

	controller.getProduto = function(req, res) {
		Produto.findOne({_id: req.params.id}).exec()
			.then(function(produto) {
				console.log(produto);
				res.status(200).send(produto);
			}, function(error) {
				res.status(404).send({mensagem:"Produto não encontrado."});
			});
	};

	return controller;
}
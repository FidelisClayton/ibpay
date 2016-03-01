var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		nome: {type: String}
	,	preco: {type: Number}
	,	descricao: {type: String}
	,	categoria: {type: String}
	,	imagem: {type: String}
	});

	return mongoose.model('Produto', schema);
}
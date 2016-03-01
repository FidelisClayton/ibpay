var mongoose = require("mongoose");

module.exports = function() {
	var schema = mongoose.Schema({
			quantidade: {type: Number} ,
			garcom: {type: String},
			produto: {type: mongoose.Schema.ObjectId,ref:"Produto"},
			mesa: {type: String},
			data: {type: Date, default: Date.now},
			cliente: {type: mongoose.Schema.ObjectId,ref:"Cliente"},
			status: {type: Boolean, default: false}
		});
	return mongoose.model("Pedido", schema);
}
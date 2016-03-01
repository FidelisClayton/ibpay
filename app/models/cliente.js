var mongoose = require("mongoose")
,	findOrCreate = require('mongoose-findorcreate');

module.exports = function() {
	var schema = mongoose.Schema({
		id: {type: String, required: true, index:{unique: true}}
	,	nome: {type: String, required: true}
	,	devices: {type: Object}
	,	faixaetatira: {type: Object}
	,	foto: {type: String}
	});
	schema.plugin(findOrCreate);
	return mongoose.model("Cliente",schema);
}
module.exports = function(app) {
	var buffer  = require("buffer").Buffer;
	var Controller = {};

	Controller.index = function(req, res) {
		var basic = req.headers.authorization.split(' ')[1];
		var model = app.models.datamodel;
		
		var matricula = new buffer(basic,'base64').toString('ascii').split(':')[0];
		var senha = new buffer(basic,'base64').toString('ascii').split(':')[1];

		if(matricula=="geanfelipe" && senha=="12345") {
			console.log("passei");
			console.log({message:model,status:200});
			res.json({message:model,status:200});
		}else {
			console.log("nao passei");
			console.log({message:"",status:401});
			res.json({message:"",status:401});
		}
	};

	return Controller;
}
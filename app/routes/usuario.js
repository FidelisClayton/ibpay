module.exports = function(app) {
	var Usuario = app.models.usuario;

	app.route('/usuario')
		.post(function(req, res) {
			var usuario = req.body;

			Usuario.create(usuario)
				.then(function() {
					res.json({mensagem:"criado"});
				},function(error) {
					res.json({mensagem:"erro de criacao"});
				})
		})
}
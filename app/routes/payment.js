module.exports = function(app){

	var controller = app.controllers.payment;

	app.route('/comprar')
		.post(controller.pagarPedidos);
}
module.exports = function(app) {
	var index = app.controllers.index;

	app.get("/rest/model",index.index);
}
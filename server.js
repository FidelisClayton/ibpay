var http = require('http')
,	express = require('express')
,	app = require('./config/express')();

require('./config/passport')();
require('./config/database.js')('mongodb://localhost/tablecash');

http.createServer(app).listen(app.get('port'), function(){
	console.log('Rodando na porta ' + app.get('port'));
})

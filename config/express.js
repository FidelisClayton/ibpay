var express = require('express')
,	load = require('express-load')
,	bodyParser = require('body-parser')
,	cookieParser = require('cookie-parser')
,	session = require('express-session')
,	passport = require('passport')
,	appRoot = require('app-root-path')
,	ejs = require("ejs")
;

module.exports = function(){
	var app = express();
	app.set('port', 3000);
	// app.set('port', 80);

	app.set("views",appRoot + "/public");
	app.set('view engine','ejs');

	app.use(express.static('./public'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(bodyParser());
	app.use(cookieParser());
	app.use(session({
		secret: 'tudo nosso porra'
	,	resave: true
	,	saveUnitialized: true
	}));

	app.use(passport.initialize());
	app.use(passport.session());


	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
}
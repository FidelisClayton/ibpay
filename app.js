var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var load = require("express-load");
var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

load("models")
  .then("controllers")
  .then("routes")
  .into(app);

// app.get("/",function(req, res) {
//   res.render("index")
// });

app.listen(3000,function() {
  console.log("servidor OK ");
});

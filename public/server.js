var http = require("http").createServer(servidor);
var filesystem = require("fs");

function servidor(req,resp)
{
	var url = req.url;
	if(url == '/'){
		resp.writeHead(200);
		resp.end(filesystem.readFileSync("index.html"));
	}else{
		resp.writeHead(404);
		resp.end("<h1>Not Found </h1>");
	}
};

http.listen(4000,function(){
	console.log("servido online");
});


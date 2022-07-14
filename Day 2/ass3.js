var h = require('http');  

var server = h.createServer(function(req,res){
	
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1>Hello from Node JS</h1>");
	res.end(); 
});

server.listen(9000, function(){
	console.log("server started at 9000");
})

//run ==>http://localhost:9000/


var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
     var url_p = url.parse(req.url,true); //true is indicate encoded url -->req.url convert encoded to decode it 
     var m = url_p.query.uid;
    res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1>Welcome  "+ m +" </h1>");
	res.end(); 
});

server.listen(9000,function(){console.log("server started at 9000")});

//http://localhost:9000/home?uid=Pratima ==>run 
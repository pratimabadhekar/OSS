var http = require('http');
var fs = require('fs');
var url = require('url');

var userCount = 0;

var server = http.createServer(function (req, res) {
   var p = url.parse(req.url,true).pathname;

	if(p != '/favicon.ico')
	{
    userCount++;
	fs.appendFile("count.txt",userCount,function(err){
				if(!err){ //success

    console.log("count generated");

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('Hello!\n');

    res.write('We have had ' + userCount + ' visits!\n');

    res.end();
	}else{
	 console.log(err.toString());
     }
   });
  }
});

server.listen(9000);

console.log('server running...')
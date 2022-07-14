var http = require('http');
var events = require('events');

var ee =new events.EvenEmitter();
ee.on('received',function(){ console.log("req received")});
ee.on('log',function(){});
ee.on('read',function(){});
ee.on('generate',function(){});

http.createServer(function(req,res){
	ee.emit('received');
}).listen(9000,function(){console.log("Started ")});
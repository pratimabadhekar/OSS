var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req,res){
      var url_p = url.parse(req.url,true);
      var p = url_p.pathname;
     // console.log(p);
      var fname = p.substring(1);
      //console.log(fname);
     fs.readFile(fname,function(err,data){
       if(!err)
        {
          res.writeHead(200,{'content-type':'text/html'});
          res.write(data.toString());
          res.end();
         }
  });
});
server.listen(9000,function(){console.log("server started")});
//http:localhost:9000/home.html  -->run
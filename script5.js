//var server = require('http');
//server.createServer(engine).listen(1337); //leets

var http = require('http');

var server = http.createServer(engine);

server.listen(1337,function(){
    console.log('Server was hit by a request');
});
 
function engine(request, response){

    //console.log(response);
    response.writeHead(200, {"Content-type":'text/plain', 'anithing':'sanka he he'});

    response.end('hey there, from the server ! :D Request from page:'+ request.url); 
}
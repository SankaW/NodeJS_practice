var server = require('http');

server.createServer(engine).listen(1337); //leets

function engine(request, response){
    response.writeHead(200, {"Content-type":'text/plain'});

    response.end('hey there, from the server ! :D');
}
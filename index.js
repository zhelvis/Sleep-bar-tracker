const http = require('http')


const makeServer = function (request, response) {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('/www/index.html');
    response.end();
}


const server  = http.createServer(makeServer);


server.listen(3000, () =>{
    console.log('created at 3000');
});
const fs = require('fs');
const http = require('http')


const makeServer = function (request, response) {
    response.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile('www/index.html', null, function(error, data) {
            response.write(data);
        });

    fs.readFile('www/style.css', null, function(error, data) {
            response.write(data);
        });
}


const server  = http.createServer(makeServer);


server.listen(3000, () =>{
    console.log('created at 3000');
});
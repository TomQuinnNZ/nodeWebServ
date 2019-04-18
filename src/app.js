const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {

    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html'});
        // Convert file contents to UTF8 (string) so we can use string substitution in the callback
        fs.readFile(__dirname + '/index.htm', 'utf8', (err, data) => { 
            if (err) {
                response.end(err);
            }
            else {
                const message = 'Hello world (placeholder via template)!';
                const html = data.replace('{Message}', message);
                response.end(html);
            }
        });
    }
    else if (request.url === '/api') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        const obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        response.end(JSON.stringify(obj));
    }
    else {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Default endpoint if not an API or JSON call.');
    }

}).listen(1337, '127.0.0.1');


/* http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html'});
    // Convert file contents to UTF8 (string) so we can use string substitution in the callback
    
    var html = fs.createReadStream(__dirname + '/index.htm');
    html.pipe(response);


    // fs.readFile(__dirname + '/index.htm', 'utf8', (err, data) => {
    //     if (err) {
    //         response.end(err);
    //     }
    //     else {
    //         const message = 'Hello world (placeholder via template)!';
    //         const html = data.replace('{Message}', message);
    //         response.end(html);
    //     }
    // });
}).listen(1337, '127.0.0.1'); */
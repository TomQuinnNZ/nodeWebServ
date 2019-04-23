var path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

//static files now pulled from /public directory via middleware function
var staticfilepath = path.join(__dirname, '../public');
app.use('/assets', express.static(staticfilepath));

app.use('/', function(request, response, next) {
    console.log(`Request URL: ${request.url}`);
    next();
});

app.get('/', (request, response) => {
    response.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world (Express)!</h1></body></html>');
});

// colon before the id tells express that 'id' could be anything
app.get('/person/:id', (request, response) => {
    // 'id' can then be accessed from request.params
    response.send(`<html><head></head><body><h1>Person ID: ${request.params.id}</h1></body></html>`);
});

app.listen(port);



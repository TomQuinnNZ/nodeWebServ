var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send('<html><head></head><body><h1>Hello world (Express)!</h1></body></html>');
});

app.get('/api', (request, response) => {
    response.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);



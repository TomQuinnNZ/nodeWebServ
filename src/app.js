var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//static files now pulled from /public directory via middleware function
var staticfilepath = path.join(__dirname, '../public');
app.use('/assets', express.static(staticfilepath));

app.use('/', function(request, response, next) {
    console.log(`Request URL: ${request.url}`);
    next();
});

var viewslocation = path.join(__dirname, '../views');
app.set('view engine', 'ejs');
app.set('views', viewslocation);

app.get('/', (request, response) => {
    response.render('index');
});

// colon before the id tells express that 'id' could be anything
app.get('/person/:id', (request, response) => {
    // 'id' can then be accessed from request.params
    response.render('person', { id: request.params.id, querystring: request.query.querystring })
});

app.post('/person', urlencodedParser, (request, response) => {
    response.send('Thank you (post submitted)!');
    console.log(request.body.firstname);
    console.log(request.body.lastname);
});

app.listen(port);



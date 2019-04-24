var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');
var bodyParser = require('body-parser');

var path = require('path');
var express = require('express');
var app = express();



var port = process.env.PORT || 3000;

// parse request body so that arguments can be read. Returns a function!
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//static files now pulled from /public directory via middleware function
var staticfilepath = path.join(__dirname, '/public');
app.use('/assets', express.static(staticfilepath));

app.use('/', (request, response, next) => {
    console.log(`Request URL: ${request.url}`);
    next();
});

apiController(app);

htmlController(app);

app.listen(port);



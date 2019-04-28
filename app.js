var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');
var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/addressbook');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 Main Street'
});

john.save( (error) => {
    if (error) throw error;

    console.log('Person saved.');
});

//static files now pulled from /public directory via middleware function
var staticfilepath = path.join(__dirname, '/public');
app.use('/assets', express.static(staticfilepath));

app.use('/', (request, response, next) => {
    console.log(`Request URL: ${request.url}`);

    // Get all the users
    Person.find({}, (error, users) => {
        if (error) throw errir;

        console.log(users);
    });

    next();
});

apiController(app);

htmlController(app);

app.listen(port);



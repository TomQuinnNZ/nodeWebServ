var path = require('path');
var viewslocation = path.join(__dirname, '../views');
var bodyParser = require('body-parser');

module.exports = (app) => {

    app.set('view engine', 'ejs');
    app.set('views', viewslocation);

    // parse request body so that arguments can be read. Returns a function!
    var urlencodedParser = bodyParser.urlencoded({ extended: false });

    app.get('/', (request, response) => {
        response.render('index');
    });
    
    // colon before the id tells express that 'id' could be anything
    app.get('/person/:id', (request, response) => {
        // 'id' can then be accessed from request.params
        response.render('person', { id: request.params.id, querystring: request.query.querystring })
    });
    
    // urlencodedParser is run first as a callback, then the explicit function runs afterwards
    app.post('/person', urlencodedParser, (request, response) => {
        response.send('Thank you (post submitted)!');
        console.log(request.body.firstname);
        console.log(request.body.lastname);
    });
}

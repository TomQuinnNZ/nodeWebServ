module.exports = (app) => {
    app.get('/api/person/:id', (request, response) => {
        // get data from the database
    });
    
    app.post('/api/person', (request, response) => {
        // save to the database
    });
    
    app.delete('/api/person/:id', (request, response) => {
        // delete from the database
    });
}
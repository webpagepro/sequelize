let createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// This will be our application entry. We'll setup our server here.
const http = require('http');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Models
let models = require('./models');

//Sync DB
models.sequelize.sync().then(function() {
    console.log('DB Works');
    
}).catch(function(err) {
    console.log(err, 'DB Update Failed');  
})
//Routes
require('./server/routes/')(app);
app.get('*', (req, res) => res.status(200).send({
    asset_id: 10000,
    category_id : 1
}))

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
message: 'Server is working.',
}));

const port = parseInt(process.env.PORT, 10) || 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

module.exports = app;


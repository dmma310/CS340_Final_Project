const express = require('express'); //Import and assign module
const app = express(); //Call express function, return express instance of app
app.use(express.static('public'));
const routes = require('./controllers/routes');
app.use('/', routes);
require('dotenv').config({path:__dirname+'/config/.env'}); // Use dotenv

app.set('port', process.env.APP_PORT || 3002); //Call ‘set’ function to set port

// Used for POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(app.get('port'), () => {
  console.log(`Express started on port ${app.get('port')}; press Ctrl-C to terminate.`);
});

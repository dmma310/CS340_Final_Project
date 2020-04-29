
const express = require('express'); //Import and assign module
const app = express(); //Call express function, return express instance of app
const path = require('path');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api', (req, res) => {
  console.log('API hit');
});

//Handle non API requests with React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.set('port', process.env.APP_PORT || 3002); //Call ‘set’ function to set port

app.listen(app.get('port'), () => {
  console.log(`Express started on port ${app.get('port')}; press Ctrl-C to terminate.`);
});

/* TODO DEXTER add these back in as neccessary

const routes = require('./controllers/routes');

app.use('/', routes);
require('dotenv').config({path:__dirname+'/config/.env'}); // Use dotenv

// Used for POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');

// compress all requests response in GZIP
app.use(compression());

// handle cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Credentials', false);
  next();
});

app.use(bodyParser.json({ limit: '10mb', extended: true, type:'application/json' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, type:'application/x-www-form-urlencoding' }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ limit: '10mb' }));

const location = require('./api/location');

app.get('/api/v1/test', location.test);
app.post('/api/v1/set/location', location.setLocation);

module.exports = app;

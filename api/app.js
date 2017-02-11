const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let routes = require('./routes/index');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use('/api/v1', routes.root);
app.use('/api/v1/clients', routes.client);
app.use('/api/v1/providers', routes.provider);

// catch 404 and forward to error handler
app.use((req, res, next) =>{
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(err.status || 500);
  res.json({ message: err.message });
});

module.exports = app;
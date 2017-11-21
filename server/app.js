const express = require('express');
const path = require('path');
var models = require('../models');
var bodyParser = require('body-parser');

const app = express();


app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}));

app.get('/emails', function(req, res) {
  models.Email.findAll().then(emails => {
    res.json({'emails': emails});
  }).catch(function(err) {
    res.status(400);
    res.json({'error': err});
  });
})

app.post('/emails', function(req, res) {
  models.Email.findOrCreate({where: {email: req.body.email}}).then(email => {
    res.json('Email successfully added');
  }).catch(function(err) {
    res.status(500);
    res.json({'error': err});
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

module.exports = app;
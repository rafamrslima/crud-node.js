const express = require('express');
const morgan = require('morgan');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose')
 
app.use(express.json());

app.use(routes);

mongoose.connect('mongodb+srv://admin:admin@logs-icfxz.mongodb.net/test?retryWrites=true&w=majority', {
         useNewUrlParser: true
 })
 .then(() => console.log('Connected…'))
 .catch(err => console.error('Connection failed…'));

// NODE_ENV=development cmd 
// npm install -g win-node-env
 
console.log('ok');

app.use(morgan('tiny')); 
 
app.listen(3500);
 
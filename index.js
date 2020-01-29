const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const path = require('path')

// Init Config
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname+'public')));


// Database
mongoose.connect('mongodb://localhost:27017/system1',  {
    useUnifiedTopology:true,
    useFindAndModify:false,
    useNewUrlParser:true,
});
requireDir('./src/models');

// Route
app.use('/', require('./src/routes'));

// Start App
var PORT = 3333
app.listen(PORT, console.log('http://localhost:'+PORT));


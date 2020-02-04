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
mongoose.connect('mongodb+srv://dbuser:6789054321@carhouse-ost8x.gcp.mongodb.net/test?retryWrites=true&w=majority',  {
    useUnifiedTopology:true,
    useFindAndModify:false,
    useNewUrlParser:true,
});

requireDir('./src/models');

// Route
app.use('/', require('./src/routes'));

// Start App
var PORT = process.env.PORT || 3300
app.listen(PORT, console.log('http://localhost:'+PORT));


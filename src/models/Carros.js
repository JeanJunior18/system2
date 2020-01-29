const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
    marca: {type:String, required:true},
    modelo: {type: String, required:true}
});

mongoose.model('Carros', CarroSchema);
const mongoose = require('mongoose');

const SaidaSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    categoria: {type: String, required: true},
    valor: {type: Number, required: true},
    data: {type: Date, default: new Date()},
});

const CategoriaSchema = new mongoose.Schema({
    nome: {type: String, required: true}
});

mongoose.model('Categorias', CategoriaSchema);
mongoose.model('Saidas', SaidaSchema);


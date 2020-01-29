const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nome: {type: String, required:[true, "Nome é obrigatório"]},
    contato: {type: String, required:[true, "Contato é obrigatório"]}
});

mongoose.model('Clientes', ClienteSchema);
const mongoose = require('mongoose')

const EntradaSchema = new mongoose.Schema({
    cliente: {type: String},
    contato: {type: String},
    carro: {type: String},
    placa: {type: String},
    servico: {type: String},
    valor: {type: Number},
    pagform: {type: String},
    observacoes: {type: String},
    pago: {type: Boolean, default:false},
    hora_entrada: {type: Date, default:new Date()}
})

mongoose.model('Entrada', EntradaSchema)
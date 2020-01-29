const mongoose = require('mongoose')

const HistoricoSchema = new mongoose.Schema({
    cliente: {type: String},
    contato: {type: String},
    carro: {type: String},
    placa: {type: String},
    servico: {type: String},
    valor: {type: Number},
    pagform: {type: String},
    observacoes: {type: String},
    pago: {type: Boolean},
    hora_entrada: {type: Date},
    hora_saida: {type: Date, default:Date.now()}
})

mongoose.model('Historico', HistoricoSchema)
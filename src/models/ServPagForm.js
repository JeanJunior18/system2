const mongoose = require('mongoose')

const ServicoSchema = mongoose.Schema({
    servico: {type: String}
})

const PagFormSchema = mongoose.Schema({
    pagform: {type: String}
})

mongoose.model('Servicos', ServicoSchema)
mongoose.model('PagForm', PagFormSchema)
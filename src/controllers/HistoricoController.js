const mongoose = require('mongoose')

const Hist = mongoose.model('Historico')

module.exports = {
    async ShowHistory(req,res){
        var all = await Hist.find().sort({'pago':1, 'hora_saida':1})
        res.json(all)
    },
    async search(req,res){
        var search = RegExp(req.body.search,'i')
        var results = await Hist.find({'cliente':search}).sort({'pago':1, 'hora_saida':1})
        console.log(results)
        res.json(results)
    },
    async dashboard(req,res){
        var values = await Hist.find()
        res.json(values)
    },
    async UpdateData(req,res){
        var service = await Hist.findById(req.params.id)
        res.json(service)
        console.log('update')
    },
    async UpdateHist(req,res){
        var service = {
            cliente: req.body.cliente,
            contato: req.body.contato,
            carro: req.body.carro,
            placa: req.body.placa,
            servico: req.body.service,
            valor: req.body.valor,
            pagform: req.body.pagform,
            observacoes: req.body.obs,
            pago: false
        }
        if(req.body.pago){
            service['pago'] = true
            console.log(req.body.pago)
        }
        var update = await Hist.findByIdAndUpdate(req.params.id,service,{new:true}).then(console.log('Ok!'))
        res.redirect('/historico')
    }
}
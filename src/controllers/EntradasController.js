const mongoose = require('mongoose');

const Entrada = mongoose.model('Entrada');
const Historico = mongoose.model('Historico')

module.exports = {
    async EntradaServico(req,res){
        const newentrada = {
            cliente: req.body.cliente,
            contato: req.body.contato,
            carro: req.body.carro,
            placa: req.body.placa,
            servico: req.body.service,
            valor: req.body.valor,
            pagform: req.body.pagform,
            observacoes: req.body.obs,
            // Pago confirm here
        }
        Entrada(newentrada).save().then(()=>{
            console.log('Novo Serviço Adicionado')
            console.log(newentrada)
            res.redirect('/')
        })
    },
    async ShowServices(req,res){
        var all = await Entrada.find()
        res.json(all)
        console.log('Home atualizada')
    },
    async EndService(req,res){
        var service = await Entrada.findById(req.params.id)
        var log = {
            cliente: service.cliente,
            contato: service.contato,
            carro: service.carro,
            placa: service.placa,
            servico: service.service,
            valor: service.valor,
            pagform: service.pagform,
            observacoes: service.obs,
            hora_entrada: service.hora_entrada
            // Pago confirm here
        }
        Historico(log).save().then(async ()=>{
            var deleteserv = await Entrada.findByIdAndRemove(req.params.id)
            console.log('Serviço Encerrado')
            res.redirect('/')
        })
    },
    async UpdateData(req,res){
        var service = await Entrada.findById(req.params.id)
        res.json(service)
        console.log('update')
    },
    async UpdateService(req,res){
        var update = await Entrada.findByIdAndUpdate(req.params.id, {
            cliente: req.body.cliente,
            contato: req.body.contato,
            carro: req.body.carro,
            placa: req.body.placa,
            servico: req.body.service,
            valor: req.body.valor,
            pagform: req.body.pagform,
            observacoes: req.body.obs,
            // Pago
        },{new:true})
        res.redirect('/')
    }
}
const mongoose = require('mongoose');

const Entrada = mongoose.model('Entrada');

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
        var deleteserv = await Entrada.findByIdAndRemove(req.params.id)
        console.log('Serviço Encerrado')
        res.redirect('/')
    }
}
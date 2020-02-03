const mongoose = require('mongoose')

const Service = mongoose.model('Servicos')
const Pagform = mongoose.model('PagForm')

module.exports = {
    async addNewService(req,res){
        var newservice = {
            servico: req.body.service
        };
        Service(newservice).save().then(()=>{
            console.log('Serviço adicionado');
            console.log(newservice)
        });
    },
    async addNewPagform(req,res){
        var newpagform = {
            pagform: req.body.pagform
        };
        Pagform(newpagform).save().then(()=>{
            console.log('Forma de Pagamento Adicionada');
            console.log(newpagform)
        });
    },
    async showServices(req,res){
        var all = await Service.find();
        res.json(all);
        console.log('Select Serviços atualizado')
    },
    async ShowPagform(req,res){
        var all = await Pagform.find();
        res.json(all)
    }
}
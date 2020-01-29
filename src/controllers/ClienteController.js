const mongoose = require('mongoose')

const Cliente = mongoose.model('Clientes')

module.exports = {
    async addNewCliente(req,res){
        const newcliente = {
            nome: req.body.clientenome,
            contato: req.body.cliente.contato
        }
        new Cliente(newcliente).save().then(()=>{
            console.log('Cliente adicionado');
            console.log(newcliente)
        })
    },
    async showAllClientes(req,res){
        const all = await Cliente.find()
        res.json(all)
    }




}
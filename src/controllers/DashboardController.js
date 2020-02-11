const mongoose = require('mongoose')

const Hist = mongoose.model('Historico')


// Para contar os pagos e não pagos
// db.servs.aggregate([{$group: {_id: "$pago", results:{$sum:1}}}])
// Soma os valores pagos e não pagos
// db.servs.aggregate([{$group: {_id: "$pago", results:{$sum:'$valor'}}}])

async function PagFormJson(data) {
    var obj = await Hist.aggregate([{ 
        $match: { 
          hora_saida: { $gt: new Date(data)}}},
          {$group: {
            _id:'$pagform', 
            contagem:{$sum:1}, 
            soma:{$sum:'$valor'}}}])
    labels = []
    contagem = []
    soma=[]
    obj.forEach(x => {
        labels.push(x._id),
        contagem.push(x.contagem)
        soma.push(x.soma)
    });
    return {labels, contagem, soma}
}
async function Inadimplentes(data){
    var obj = await Hist.aggregate([
        {$match:{
            pago:{$ne: true},
            hora_saida:{$gt: new Date(data)}}},
        {$group:{
            _id:'$pago',
            contInad:{$sum:1},
            valInad:{$sum:'$valor'}}}])
        return obj
        
}
async function services(data){
    var obj = await Hist.aggregate([
        {$match:{
            hora_saida:{$gt: new Date(data)}}},
        {$group:{
            _id:'$servico',
            pedidos: {$sum:1}}}])
    var labelserv = []
    var contagemserv = []
    obj.forEach(x=>{
        labelserv.push(x._id)
        contagemserv.push(x.pedidos)
    return {labelserv, contagemserv}
    })
}


module.exports = {
    async getDate(req,res){
        var data = req.body
        // console.log(data)
            var pagform = await PagFormJson(data.date)
            var servs = await services(data.date)
            var dados = Object.assign({},pagform,servs)
            return res.json(dados)
        // let asd = await Indadimplentes(data.date)
        // return res.json(asd)
    },
    async getServices(req,res){
        var data = req.body.date
        console.log(data)
        var dados = services(data)
        res.json(dados)
    }
}
const mongoose = require('mongoose')

const Hist = mongoose.model('Historico')


// Para contar os pagos e não pagos
// db.servs.aggregate([{$group: {_id: "$pago", results:{$sum:1}}}])
// Soma os valores pagos e não pagos
// db.servs.aggregate([{$group: {_id: "$pago", results:{$sum:'$valor'}}}])

async function PagFormJson(data,pago) {
    var obj = await Hist.aggregate([{ 
        $match: { 
            hora_saida: { $gt: new Date(data)},
            pago:pago}},
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


// async function services(data){
//     var obj = await Hist.aggregate([
//         {$match:{
//             hora_saida:{$gt: new Date(data)}}},
//         {$group:{
//             _id:'$servico',
//             pedidos: {$sum:1}}}])
//     var labelserv = []
//     var contagemserv = []
//     obj.forEach(x=>{
//         labelserv.push(x._id)
//         contagemserv.push(x.pedidos)
//     return {labelserv, contagemserv}
//     })
// }


module.exports = {

    async getDate(req,res){
        if(req.body.inadon == 'true')
            var pago = false
        else
            var pago = true
        var pagform = await PagFormJson(req.body.date, pago)
        return res.json(pagform)

    },
    // async getServices(req,res){
    //     var data = req.body.date
    //     console.log(data)
    //     var dados = services(data)
    //     res.json(dados)
    // }

}
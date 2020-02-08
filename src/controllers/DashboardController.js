const mongoose = require('mongoose')

const Hist = mongoose.model('Historico')


// Para contar os pagos e não pagos
// db.servs.aggregate([{$group: {_id: "$pago", results:{$sum:1}}}])
// Soma os valores pagos e não pagos
// db.servs.aggregate([{$group: {_id: "$pago", results:{$sum:'$valor'}}}])

async function PagFormJson(data) {
        
    // var data = req.body.date
    // console.log(data)

    var obj = await Hist.aggregate([{ 
        $match: { 
          hora_saida: { $gt: new Date(data) }
        } 
      },{$group: {
        _id:'$pagform', 
        contagem:{$sum:1}, 
        soma:{$sum:'$valor'}
    }}])
    labels = []
    contagem = []
    soma=[]
    obj.forEach(x => {
        labels.push(x._id),
        contagem.push(x.contagem)
        soma.push(x.soma)
    });
    return {labels, contagem, soma}
    // res.json({labels, contagem, soma})
}

module.exports = {
    async getDate(req,res){
        var data = req.body
        console.log(data)
        var js = await PagFormJson(data.date)
        return res.json(js)
    },
    
}
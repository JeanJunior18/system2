const mongoose = require('mongoose')

const Hist = mongoose.model('Historico')


// Para contar os pagos e não pagos
// db.servs.aggregate([{$group: {_id: "$pago", results:{$sum:1}}}])
// Soma os valores pagos e não pagos
// db.servs.aggregate([{$group: {_id: "$pago", results:{$sum:'$valor'}}}])

module.exports = {
    async PagFormJson(req,res){
        var obj = await Hist.aggregate([{$group: {
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
        res.json({labels, contagem, soma})
    }
}
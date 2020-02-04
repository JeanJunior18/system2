const mongoose = require('mongoose')

const Hist = mongoose.model('Historico')

module.exports = {
    async ShowHistory(req,res){
        var all = await Hist.find()
        res.json(all)
    },

    async dashboard(req,res){
        var values = await Hist.find()
        res.json(values)
    }
}
const mongoose = require('mongoose');

const Saida = mongoose.model('Saidas')
const Categoria = mongoose.model('Categorias');

module.exports = {
    async CreateCat(req,res){
        const { categoria } = req.body
        await Categoria({ nome:categoria }).save(()=>{
        })
        res.send()
    },
    async ShowCats(req,res){
        const all = await Categoria.find()
        res.json(all)
    },
    async CreateSaida(req,res){
        const { nome, categoria, valor } = req.body
        Saida({ nome, categoria, valor }).save()
        res.redirect('/saidas')
    },
    async ShowSaidas(req,res){
        const all = await Saida.find()
        res.json(all)
    }
}
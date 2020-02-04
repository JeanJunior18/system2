const mongoose = require('mongoose')
const Carro = mongoose.model('Carros')

module.exports ={
    async addNewCar(req,res){
        const newcar = {
            marca: req.body.marca,
            modelo: req.body.modelo,
        };
        Carro(newcar).save().then(()=>{
            console.log("Salvo!");
            console.log(newcar);
        })
    },
    async showAllCars(req,res){
        const all = await Carro.find();
        res.json(all)
        console.log("Select atualizado!")
    }
  
  






}
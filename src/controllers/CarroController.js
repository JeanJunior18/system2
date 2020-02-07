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
        var text = all.marca+" "+all.modelo
        arr = []; var i=1
        all.forEach(x => {
            arr.push({id: x.marca+" "+x.modelo,text:x.marca+" "+x.modelo})
            i +=1
        });

        res.json(all)
        console.log("Select atualizado!")
    }
  
  






}
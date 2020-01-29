const express = require('express')
const path = require('path')
const router = express.Router()


const Carro = require('./controllers/CarroController')
router.get('/newcar', (req,res)=>{
    res.sendFile(path.join(__dirname+'/views/newcar.html'))
});
router.post('/newcar', Carro.addNewCar);
router.post('/listcar', Carro.showAllCars);

// Home Services
router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+'/views/home.html'))
});
router.post('/getcars',Carro.showAllCars);

// Add Services
router.get('/newservice',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/service.html'))
});


module.exports = router
const express = require('express')
const path = require('path')
const router = express.Router()

// Home Services
    const Carro = require('./controllers/CarroController')
    router.get('/', (req,res)=>{
        res.sendFile(path.join(__dirname+'/views/home.html'))
    });
    router.get('/newservice', (req,res)=>{
        res.sendFile(path.join(__dirname+'/views/service.html'))
    })
    router.post('/getcars',Carro.showAllCars);

// Adicionar Veículo
    router.get('/newcar', (req,res)=>{
        res.sendFile(path.join(__dirname+'/views/newcar.html'))
    });
    router.post('/newcar', Carro.addNewCar);
    router.post('/listcar', Carro.showAllCars);

// Adicionar Serviço e Pagamento
    const Serv = require('./controllers/ServPagFormController')
    router.post('/newservice', Serv.addNewService);
    router.post('/listservices', Serv.showServices);
    router.post('/newpagform', Serv.addNewPagform);
    router.post('/listpagform', Serv.ShowPagform)


module.exports = router
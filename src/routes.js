const express = require('express')
const path = require('path')
const router = express.Router()

// Home Services
    const Entrada = require('./controllers/EntradasController')
    const Carro = require('./controllers/CarroController')
    router.get('/', (req,res)=>{
        res.sendFile(path.join(__dirname+'/views/home.html'))
    });
    router.get('/newservice', (req,res)=>{
        res.sendFile(path.join(__dirname+'/views/service.html'))
    })
    router.post('/showservices',Entrada.ShowServices);
    router.get('/encerrarservico/:id',Entrada.EndService)

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
    router.post('/listpagform', Serv.ShowPagform);

// Formulario Total
    router.post('/entradaservico', Entrada.EntradaServico)


module.exports = router
const express = require('express')
const path = require('path')
const router = express.Router()

const Entrada = require('./controllers/EntradasController')
const Carro = require('./controllers/CarroController')
const Serv = require('./controllers/ServPagFormController')
const Hist = require('./controllers/HistoricoController')
const Dash = require('./controllers/DashboardController')

// Home Services    
    router.get('/', (req,res)=>{res.sendFile(path.join(__dirname+'/views/home.html'))});

    router.get('/newservice', (req,res)=>{res.sendFile(path.join(__dirname+'/views/service.html'))})
    router.post('/showservices',Entrada.ShowServices);
    router.get('/encerrarservico/:id',Entrada.EndService)

    router.get('/update/:id',(req,res)=>{res.sendFile(path.join(__dirname+'/views/updateservice.html'))})
    router.post('/update/:id',Entrada.UpdateData)
    router.post('/updating/:id', Entrada.UpdateService)
// Configurações
    router.get('/config',(req,res)=>{res.sendFile(path.join(__dirname+'/views/config.html'))})

// Dashboard
    router.get('/dashboard',(req,res)=>{res.sendFile(path.join(__dirname+'/views/dashboard.html'))})
    // router.get('/values', Dash.PagFormJson)
    router.post('/gethour', Dash.getDate)

// History Page
    router.get('/historico', (req,res)=>{res.sendFile(path.join(__dirname+'/views/history.html'))})
    router.post('/historico', Hist.ShowHistory)

// Adicionar Veículo
    router.get('/newcar', (req,res)=>{
    res.sendFile(path.join(__dirname+'/views/newcar.html'))});
    router.post('/newcar', Carro.addNewCar);
    router.post('/listcar', Carro.showAllCars);

// Adicionar Serviço e Pagamento

    router.post('/newservice', Serv.addNewService);
    router.post('/listservices', Serv.showServices);
    router.post('/newpagform', Serv.addNewPagform);
    router.post('/listpagform', Serv.ShowPagform);

// Formulario Total
    router.post('/entradaservico', Entrada.EntradaServico)


module.exports = router
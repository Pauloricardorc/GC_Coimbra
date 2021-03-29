const express = require('express');

const Gestao_de_contrato = require('./Controller/Controller_gestao_de_contrato')
const filter = require('./Controller/FilterController')

const routes = express.Router()

routes.get('/gestao_de_contrato', Gestao_de_contrato.index)
routes.post('/Cgestao_de_contrato', Gestao_de_contrato.create)


routes.get('/Modale/:id', Gestao_de_contrato.list)
routes.get('/filter', filter.index)


module.exports = routes;

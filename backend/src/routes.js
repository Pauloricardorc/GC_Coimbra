const express = require('express')
const CEmprestimos = require('./Controller/Emprestimos_Controller')
const CArrendamento = require('./Controller/Arrendamento_Controller')
const CSeguro = require('./Controller/Seguro_Controller')
const CLocacao_Servico = require('./Controller/Locacao_Servico_Controller')
const CEquipamentos = require('./Controller/Equipamentos_Controller')


const routes = express.Router()

routes.get('/emprestimos', CEmprestimos.index)
routes.post('/emprestimos', CEmprestimos.create)

routes.get('/arrendamento', CArrendamento.index)
routes.post('/arrendamento', CArrendamento.create)

routes.get('/seguro', CSeguro.index)
routes.post('/seguro', CSeguro.create)

routes.get('/locacaoServicos', CLocacao_Servico.index)
routes.post('/locacaoServicos', CLocacao_Servico.create)

routes.get('/equipamentos', CEquipamentos.index)
routes.post('/equipamentos', CEquipamentos.create)

module.exports = routes
import express from 'express'
const router = express.Router()

import * as consultaController from './consultaController.js'

router.post('/consultas', consultaController.criarConsulta)
router.get('/consultas', consultaController.listarConsultas)
router.get('/consultas/:id', consultaController.visualizarConsulta)
router.put('/consultas/:id', consultaController.atualizarConsulta)
router.patch('/consultas/:id', consultaController.retificarConsulta)
router.delete('/consultas/:id', consultaController.deletarConsulta)

export default router

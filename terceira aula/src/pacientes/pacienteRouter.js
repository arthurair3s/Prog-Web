import express from 'express'
const router = express.Router()

import * as pacienteController from './pacienteController.js'

router.post('/pacientes', pacienteController.criarPaciente)
router.get('/pacientes', pacienteController.listarPacientes)
router.get('/pacientes/:id', pacienteController.visualizarPaciente)
router.put('/pacientes/:id', pacienteController.atualizarPaciente)
router.patch('/pacientes/:id', pacienteController.retificarPaciente)
router.delete('/pacientes/:id', pacienteController.deletarPaciente)

export default router

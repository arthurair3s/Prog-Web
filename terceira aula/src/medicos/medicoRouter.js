import express from 'express'
const router = express.Router()

import * as medicoController from './medicoController.js'

router.post('/medicos', medicoController.criarMedico)
router.get('/medicos', medicoController.listarMedicos)
router.get('/medicos/:id', medicoController.visualizarMedico)
router.put('/medicos/:id', medicoController.atualizarMedico)
router.patch('/medicos/:id', medicoController.retificarMedico)
router.delete('/medicos/:id', medicoController.deletarMedico)

export default router

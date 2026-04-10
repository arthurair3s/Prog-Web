import express from 'express'
const router = express.Router()
import medicoRouter from './medicos/medicoRouter.js'
import pacienteRouter from './pacientes/pacienteRouter.js'
import consultaRouter from './consultas/consultaRouter.js'

router.use('/', medicoRouter)
router.use('/', pacienteRouter)
router.use('/', consultaRouter)

export default router

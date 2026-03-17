import express from 'express'
const router = express.Router()

import * as cursoController from './cursoController.js'

router.post('/curso', cursoController.criarCurso)
router.get('/cursos', cursoController.listarCursos)
router.get('/curso/:id', cursoController.visualizarCurso)
router.put('/curso/:id', cursoController.atualizarCurso)
router.patch('/curso/:id', cursoController.retificarCurso)
router.delete('/curso/:id', cursoController.deletarCurso)

export default router

import express from 'express'
const router = express.Router()

import * as alunoController from './alunoController.js'

router.post('/aluno', alunoController.criarAluno)
router.get('/alunos', alunoController.listarAlunos)
router.get('/aluno/:id', alunoController.visualizarAluno)
router.put('/aluno/:id', alunoController.atualizarAluno)
router.patch('/aluno/:id', alunoController.retificarAluno)
router.delete('/aluno/:id', alunoController.deletarAluno)

export default router

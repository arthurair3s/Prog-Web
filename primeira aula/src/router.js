import express from 'express'
const router = express.Router()
import alunoRouter from './alunos/alunoRouter.js'
import cursoRouter from './cursos/cursoRouter.js'

router.use('/', alunoRouter)
router.use('/', cursoRouter)

export default router

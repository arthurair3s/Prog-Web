import express from 'express'
import alunosRoutes from './api_alunos.js'
import cursosRoutes from './api_cursos.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.use(alunosRoutes)
app.use(cursosRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

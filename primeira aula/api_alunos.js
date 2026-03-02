import express from 'express'
import { arrAlunos } from './db.js'

const router = express.Router()

router.post('/aluno', (req, res) => {
  let _id = 1

  if (arrAlunos.length != 0) {
    const ultimoAluno = arrAlunos[arrAlunos.length - 1]
    _id = ultimoAluno.alunoId + 1
  }

  arrAlunos.push({
    alunoId: _id,
    nome: req.body.nome,
    matricula: req.body.matricula,
    cursos: req.body.cursos
  })

  res.status(201).send('Ok')
})

router.get('/alunos', (req, res) => {
  res.status(200).json(arrAlunos)
})

router.get('/aluno/:id', (req, res) => {
  const _id = parseInt(req.params.id)
  const aluno = arrAlunos.find(aluno => aluno.alunoId === _id)

  if (!aluno) {
    return res.status(404).send('Aluno não encontrado')
  }

  res.status(200).json(aluno)
})

router.put('/aluno/:id', (req, res) => {
  const _id = parseInt(req.params.id)
  const aluno = arrAlunos.find(aluno => aluno.alunoId === _id)

  if (!aluno) {
    return res.status(404).send('Aluno não encontrado')
  }

  aluno.nome = req.body.nome
  aluno.matricula = req.body.matricula
  aluno.cursos = req.body.cursos

  res.status(200).json(aluno)
})

router.patch('/aluno/:id', (req, res) => {
  const _id = parseInt(req.params.id)
  const aluno = arrAlunos.find(aluno => aluno.alunoId === _id)

  if (!aluno) {
    return res.status(404).send('Aluno não encontrado')
  }

  const campos = Object.keys(req.body)

  for (let i = 0; i < campos.length; i++) {
    if (campos[i] != 'alunoId') {
      aluno[campos[i]] = req.body[campos[i]]
    }
  }

  res.status(200).json(aluno)
})

router.delete('/aluno/:id', (req, res) => {
  const _id = parseInt(req.params.id)
  const lengthArray = arrAlunos.length

  const newArrAlunos = arrAlunos.filter(aluno => aluno.alunoId !== _id)

  if (lengthArray == newArrAlunos.length) {
    return res.status(404).send('Exclusão não concluída')
  }

  arrAlunos.length = 0
  arrAlunos.push(...newArrAlunos)

  res.status(204).end()
})

export default router

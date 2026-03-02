import express from 'express'
import { arrCursos } from './db.js'

const router = express()

router.post('/curso', (req, res) => {
  let _id = 1

  if (arrCursos.length != 0) {
    const ultimoCurso = arrCursos[arrCursos.length - 1]
    _id = ultimoCurso.cursoId + 1
  }

  arrCursos.push({
    cursoId: _id,
    nome: req.body.nome
  })

  res.status(201).send('Ok')
})

router.get('/cursos', (req, res) => {
  res.status(200).json(arrCursos)
})

router.get('/curso/:id', (req, res) => {
  const _id = parseInt(req.params.id)
  const curso = arrCursos.find(curso => curso.cursoId === _id)

  if (!curso) {
    return res.status(404).send('Curso não encontrado')
  }

  res.status(200).json(curso)
})

router.put('/curso/:id', (req, res) => {
  const _id = parseInt(req.params.id)
  const curso = arrCursos.find(curso => curso.cursoId === _id)

  if (!curso) {
    return res.status(404).send('Curso não encontrado')
  }

  curso.nome = req.body.nome

  res.status(200).json(curso)
})

router.patch('/curso/:id', (req, res) => {
  const _id = parseInt(req.params.id)
  const curso = arrCursos.find(curso => curso.cursoId === _id)

  if (!curso) {
    return res.status(404).send('Curso não encontrado')
  }

  const campos = Object.keys(req.body)

  for (let i = 0; i < campos.length; i++) {
    if (campos[i] != 'cursoId') {
      curso[campos[i]] = req.body[campos[i]]
    }
  }

  res.status(200).json(curso)
})

router.delete('/curso/:id', (req, res) => {
  const _id = parseInt(req.params.id)
  const lengthArray = arrCursos.length

  const newArrCursos = arrCursos.filter(curso => curso.cursoId !== _id)

  if (lengthArray == newArrCursos.length) {
    return res.status(404).send('Exclusão não concluída')
  }

  arrCursos.length = 0
  arrCursos.push(...newArrCursos)

  res.status(204).end()
})

export default router

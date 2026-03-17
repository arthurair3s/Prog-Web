import * as cursoService from './cursosService.js'

export const criarCurso = async (req, res) => {
  const cursos = await cursoService.criar(req.body)
  res.status(201).json(cursos)
}

export const listarCursos = async (req, res) => {
  const cursos = await cursoService.listar()
  res.status(200).json(cursos)
}

export const visualizarCurso = async (req, res) => {
  const cursos = await cursoService.visualizar(req.params.id)
  res.status(200).json(cursos)
}

export const atualizarCurso = async (req, res) => {
  const cursos = await cursoService.atualizar(req.params.id, req.body)
  res.status(200).json(cursos)
}

export const retificarCurso = async (req, res) => {
  const cursos = await cursoService.retificar(req.params.id, req.body)
  res.status(200).json(cursos)
}

export const deletarCurso = async (req, res) => {
  const cursos = await cursoService.deletar(req.params.id)
  res.status(204).json(cursos)
}

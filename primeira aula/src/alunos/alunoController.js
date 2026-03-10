import * as alunoService from './alunoService.js'

export const criarAluno = async (req, res) => {
  const alunos = await alunoService.criar(req.body)
  res.status(201).json(alunos)
}

export const listarAlunos = async (req, res) => {
  const alunos = await alunoService.listar()
  res.status(200).json(alunos)
}

export const visualizarAluno = async (req, res) => {
  const alunos = await alunoService.visualizar(req.params.id)
  res.status(200).json(alunos)
}

export const atualizarAluno = async (req, res) => {
  const alunos = await alunoService.atualizar(req.params.id, req.body)
  res.status(200).json(alunos)
}

export const retificarAluno = async (req, res) => {
  const alunos = await alunoService.retificar(req.params.id, req.body)
  res.status(200).json(alunos)
}

export const deletarAluno = async (req, res) => {
  const alunos = await alunoService.deletar(req.params.id)
  res.status(204).json(alunos)
}

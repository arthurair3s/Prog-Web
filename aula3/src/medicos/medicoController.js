import * as medicoService from './medicoService.js'

export const criarMedico = (req, res) => {
  try {
    const medico = medicoService.criar(req.body)
    res.status(201).json(medico)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const listarMedicos = (req, res) => {
  try {
    const medicos = medicoService.listar()
    res.status(200).json(medicos)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const visualizarMedico = (req, res) => {
  try {
    const medico = medicoService.visualizar(req.params.id)
    res.status(200).json(medico)
  } catch (error) {
    res.status(404).send(error.message)
  }
}

export const atualizarMedico = (req, res) => {
  try {
    const medico = medicoService.atualizar(req.params.id, req.body)
    res.status(200).json(medico)
  } catch (error) {
    res.status(404).send(error.message)
  }
}

export const retificarMedico = (req, res) => {
  try {
    const medico = medicoService.retificar(req.params.id, req.body)
    res.status(200).json(medico)
  } catch (error) {
    res.status(404).send(error.message)
  }
}

export const deletarMedico = (req, res) => {
  try {
    const medico = medicoService.deletar(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(404).send(error.message)
  }
}

import * as consultaService from './consultaService.js'

export const criarConsulta = (req, res) => {
  try {
    const consulta = consultaService.criar(req.body)
    res.status(201).json(consulta)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const listarConsultas = (req, res) => {
  try {
    const consultas = consultaService.listar()
    res.status(200).json(consultas)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const visualizarConsulta = (req, res) => {
  try {
    const consulta = consultaService.visualizar(req.params.id)
    res.status(200).json(consulta)
  } catch (error) {
    res.status(404).send(error.message)
  }
}

export const atualizarConsulta = (req, res) => {
  try {
    const consulta = consultaService.atualizar(req.params.id, req.body)
    res.status(200).json(consulta)
  } catch (error) {
    res.status(404).send(error.message)
  }
}

export const retificarConsulta = (req, res) => {
  try {
    const consulta = consultaService.retificar(req.params.id, req.body)
    res.status(200).json(consulta)
  } catch (error) {
    res.status(404).send(error.message)
  }
}

export const deletarConsulta = (req, res) => {
  try {
    const consulta = consultaService.deletar(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(404).send(error.message)
  }
}
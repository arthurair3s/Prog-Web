import * as pacienteService from './pacienteService.js'

export const criarPaciente = (req, res) => {
  try {
    const paciente = pacienteService.criar(req.body)
    res.status(201).json(paciente)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const listarPacientes = (req, res) => {
  try {
    const pacientes = pacienteService.listar()
    res.status(200).json(pacientes)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const visualizarPaciente = (req, res) => {
  try {
    const paciente = pacienteService.visualizar(req.params.id)
    res.status(200).json(paciente)
  } catch (error) {
    res.status(404).send(error.message)
  }
}

export const atualizarPaciente = (req, res) => {
  try {
    const paciente = pacienteService.atualizar(req.params.id, req.body)
    res.status(200).json(paciente)
  } catch (error) {
    res.status(404).send(error.message)
  }
}

export const retificarPaciente = (req, res) => {
  try {
    const paciente = pacienteService.retificar(req.params.id, req.body)
    res.status(200).json(paciente)
  } catch (error) {
    res.status(404).send(error.message)
  }
}

export const deletarPaciente = (req, res) => {
  try {
    const paciente = pacienteService.deletar(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(404).send(error.message)
  }
}

import * as pacienteRepository from './pacienteRepository.js'

export const criar = novoPacienteData => {
  const { nome, idade } = novoPacienteData

  if (!nome || !idade) {
    throw new Error('Nome e idade são obrigatórios para cadastrar um paciente')
  }

  return pacienteRepository.criar(novoPacienteData)
}

export const listar = () => {
  return pacienteRepository.listar()
}

export const visualizar = id => {
  const pacienteId = parseInt(id)
  const paciente = pacienteRepository.visualizar(pacienteId)

  if (!paciente) {
    throw new Error('Paciente não encontrado')
  }

  return paciente
}

export const atualizar = (id, pacienteData) => {
  const pacienteId = parseInt(id)
  const pacienteExistente = pacienteRepository.visualizar(pacienteId)

  if (!pacienteExistente) {
    throw new Error('Paciente não encontrado')
  }

  return pacienteRepository.atualizar(pacienteId, pacienteData)
}

export const retificar = (id, pacienteData) => {
  return atualizar(id, pacienteData)
}

export const deletar = id => {
  const pacienteId = parseInt(id)
  const pacienteExistente = pacienteRepository.visualizar(pacienteId)

  if (!pacienteExistente) {
    throw new Error('Paciente não encontrado')
  }

  return pacienteRepository.deletar(pacienteId)
}

import * as consultaRepository from './consultaRepository.js';
import * as medicoRepository from '../medicos/medicoRepository.js';
import * as pacienteRepository from '../pacientes/pacienteRepository.js';

export const criar = (novaConsultaData) => {
  const { medicoId, pacienteId, dataHora } = novaConsultaData;

  // Validate required fields
  if (!medicoId || !pacienteId || !dataHora) {
    throw new Error('medicoId, pacienteId e dataHora são obrigatórios');
  }

  const medico = medicoRepository.visualizar(parseInt(medicoId));
  if (!medico) {
    throw new Error('Médico não encontrado');
  }

  const paciente = pacienteRepository.visualizar(parseInt(pacienteId));
  if (!paciente) {
    throw new Error('Paciente não encontrado');
  }

  const consultas = consultaRepository.listar();
  const consultaExistente = consultas.find(
    consulta => consulta.medicoId === parseInt(medicoId) && consulta.dataHora === dataHora
  );

  if (consultaExistente) {
    throw new Error('O médico já possui uma consulta marcada para este horário.');
  }
  
  return consultaRepository.criar({
    ...novaConsultaData,
    medicoId: parseInt(medicoId),
    pacienteId: parseInt(pacienteId)
  });
}

export const listar = () => {
  return consultaRepository.listar();
}

export const visualizar = (id) => {
  const consultaId = parseInt(id);
  const consulta = consultaRepository.visualizar(consultaId);
  
  if (!consulta) {
    throw new Error('Consulta não encontrada');
  }
  
  return consulta;
}

export const atualizar = (id, consultaData) => {
  const consultaId = parseInt(id);
  const consultaExistente = consultaRepository.visualizar(consultaId);
  
  if (!consultaExistente) {
    throw new Error('Consulta não encontrada');
  }

  if (consultaData.medicoId || consultaData.dataHora) {
    const medicoId = parseInt(consultaData.medicoId) || consultaExistente.medicoId
    const dataHora = consultaData.dataHora || consultaExistente.dataHora
    
    const consultas = consultaRepository.listar()
    const conflito = consultas.find(
      consulta => consulta.id !== consultaId && consulta.medicoId === medicoId && consulta.dataHora === dataHora
    )

    if (conflito) {
        throw new Error('O médico já possui uma consulta marcada para este horário.')
    }
  }

  return consultaRepository.atualizar(consultaId, consultaData);
}

export const retificar = (id, consultaData) => {
  return atualizar(id, consultaData);
}

export const deletar = (id) => {
  const consultaId = parseInt(id);
  const consultaExistente = consultaRepository.visualizar(consultaId);
  
  if (!consultaExistente) {
    throw new Error('Consulta não encontrada');
  }

  return consultaRepository.deletar(consultaId);
}

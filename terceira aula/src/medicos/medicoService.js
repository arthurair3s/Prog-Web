import * as medicoRepository from './medicoRepository.js';

export const criar = (novoMedicoData) => {
  const { nome, especialidade } = novoMedicoData;

  if (!nome || !especialidade) {
    throw new Error('Nome e especialidade são obrigatórios para cadastrar um médico');
  }
  
  return medicoRepository.criar(novoMedicoData);
}

export const listar = () => {
  return medicoRepository.listar();
}

export const visualizar = (id) => {
  const medicoId = parseInt(id);
  const medico = medicoRepository.visualizar(medicoId);
  
  if (!medico) {
    throw new Error('Médico não encontrado');
  }
  
  return medico;
}

export const atualizar = (id, medicoData) => {
  const medicoId = parseInt(id);
  const medicoExistente = medicoRepository.visualizar(medicoId);
  
  if (!medicoExistente) {
    throw new Error('Médico não encontrado');
  }

  return medicoRepository.atualizar(medicoId, medicoData);
}

export const retificar = (id, medicoData) => {
  return atualizar(id, medicoData);
}

export const deletar = (id) => {
  const medicoId = parseInt(id);
  const medicoExistente = medicoRepository.visualizar(medicoId);
  
  if (!medicoExistente) {
    throw new Error('Médico não encontrado');
  }

  return medicoRepository.deletar(medicoId);
}

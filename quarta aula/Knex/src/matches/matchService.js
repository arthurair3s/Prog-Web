import * as matchRepository from './matchRepository.js';

export const criar = async (dados) => {
  return await matchRepository.criar(dados);
};

export const listar = async () => {
  return await matchRepository.listar();
};

export const visualizar = async (id) => {
  const match = await matchRepository.visualizar(id);
  if (!match) throw new Error('Match não encontrado');
  return match;
};

export const deletar = async (id) => {
  const match = await matchRepository.visualizar(id);
  if (!match) throw new Error('Match não encontrado');
  return await matchRepository.deletar(id);
};

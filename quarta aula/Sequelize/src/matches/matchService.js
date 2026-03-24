import * as matchRepository from './matchRepository.js';

export const criar = async (dados) => {
  return await matchRepository.criar(dados);
};

export const listar = async () => {
  return await matchRepository.listar();
};

export const visualizar = async (id) => {
  const matchObj = await matchRepository.visualizar(id);
  if (!matchObj) throw new Error('Match não encontrado');
  return matchObj;
};

export const atualizar = async (id, dados) => {
  const matchObj = await matchRepository.atualizar(id, dados);
  if (!matchObj) throw new Error('Match não encontrado');
  return matchObj;
};

export const deletar = async (id) => {
  const deleted = await matchRepository.deletar(id);
  if (!deleted) throw new Error('Match não encontrado');
  return true;
};

import * as interesseRepository from './interesseRepository.js';

export const criar = async (dados) => {
  return await interesseRepository.criar(dados);
};

export const listar = async () => {
  return await interesseRepository.listar();
};

export const visualizar = async (id) => {
  const interesse = await interesseRepository.visualizar(id);
  if (!interesse) throw new Error('Interesse não encontrado');
  return interesse;
};

export const atualizar = async (id, dados) => {
  const interesse = await interesseRepository.atualizar(id, dados);
  if (!interesse) throw new Error('Interesse não encontrado');
  return interesse;
};

export const deletar = async (id) => {
  const deleted = await interesseRepository.deletar(id);
  if (!deleted) throw new Error('Interesse não encontrado');
  return true;
};

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
  const interesse = await interesseRepository.visualizar(id);
  if (!interesse) throw new Error('Interesse não encontrado');
  return await interesseRepository.atualizar(id, dados);
};

export const deletar = async (id) => {
  const interesse = await interesseRepository.visualizar(id);
  if (!interesse) throw new Error('Interesse não encontrado');
  return await interesseRepository.deletar(id);
};

import * as enderecoRepository from './enderecoRepository.js';

export const criar = async (dados) => {
  return await enderecoRepository.criar(dados);
};

export const listar = async () => {
  return await enderecoRepository.listar();
};

export const visualizar = async (id) => {
  const endereco = await enderecoRepository.visualizar(id);
  if (!endereco) throw new Error('Endereço não encontrado');
  return endereco;
};

export const atualizar = async (id, dados) => {
  const endereco = await enderecoRepository.atualizar(id, dados);
  if (!endereco) throw new Error('Endereço não encontrado');
  return endereco;
};

export const deletar = async (id) => {
  const deleted = await enderecoRepository.deletar(id);
  if (!deleted) throw new Error('Endereço não encontrado');
  return true;
};

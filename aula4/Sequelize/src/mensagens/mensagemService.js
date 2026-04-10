import * as mensagemRepository from './mensagemRepository.js';

export const criar = async (dados) => {
  return await mensagemRepository.criar(dados);
};

export const listar = async () => {
  return await mensagemRepository.listar();
};

export const visualizar = async (id) => {
  const mensagem = await mensagemRepository.visualizar(id);
  if (!mensagem) throw new Error('Mensagem não encontrada');
  return mensagem;
};

export const atualizar = async (id, dados) => {
  const mensagem = await mensagemRepository.atualizar(id, dados);
  if (!mensagem) throw new Error('Mensagem não encontrada');
  return mensagem;
};

export const deletar = async (id) => {
  const deleted = await mensagemRepository.deletar(id);
  if (!deleted) throw new Error('Mensagem não encontrada');
  return true;
};

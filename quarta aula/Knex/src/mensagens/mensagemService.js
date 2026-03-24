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

export const deletar = async (id) => {
  const mensagem = await mensagemRepository.visualizar(id);
  if (!mensagem) throw new Error('Mensagem não encontrada');
  return await mensagemRepository.deletar(id);
};

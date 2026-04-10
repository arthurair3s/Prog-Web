import * as interacaoRepository from './interacaoRepository.js';

export const criar = async (dados) => {
  return await interacaoRepository.criar(dados);
};

export const listar = async () => {
  return await interacaoRepository.listar();
};

export const visualizar = async (id) => {
  const interacao = await interacaoRepository.visualizar(id);
  if (!interacao) throw new Error('Interação não encontrada');
  return interacao;
};

export const atualizar = async (id, dados) => {
  const interacao = await interacaoRepository.atualizar(id, dados);
  if (!interacao) throw new Error('Interação não encontrada');
  return interacao;
};

export const deletar = async (id) => {
  const deleted = await interacaoRepository.deletar(id);
  if (!deleted) throw new Error('Interação não encontrada');
  return true;
};

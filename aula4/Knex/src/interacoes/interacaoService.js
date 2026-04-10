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
  const interacao = await interacaoRepository.visualizar(id);
  if (!interacao) throw new Error('Interação não encontrada');
  return await interacaoRepository.atualizar(id, dados);
};

export const deletar = async (id) => {
  const interacao = await interacaoRepository.visualizar(id);
  if (!interacao) throw new Error('Interação não encontrada');
  return await interacaoRepository.deletar(id);
};

import * as usuarioRepository from './usuarioRepository.js';

export const criar = async (dados) => {
  return await usuarioRepository.criar(dados);
};

export const listar = async () => {
  return await usuarioRepository.listar();
};

export const visualizar = async (id) => {
  const usuario = await usuarioRepository.visualizar(id);
  if (!usuario) throw new Error('Usuário não encontrado');
  return usuario;
};

export const atualizar = async (id, dados) => {
  const usuario = await usuarioRepository.visualizar(id);
  if (!usuario) throw new Error('Usuário não encontrado');
  return await usuarioRepository.atualizar(id, dados);
};

export const deletar = async (id) => {
  const usuario = await usuarioRepository.visualizar(id);
  if (!usuario) throw new Error('Usuário não encontrado');
  return await usuarioRepository.deletar(id);
};

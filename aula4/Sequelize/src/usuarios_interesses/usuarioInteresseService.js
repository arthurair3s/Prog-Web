import * as usuarioInteresseRepository from './usuarioInteresseRepository.js';

export const criar = async (dados) => {
  return await usuarioInteresseRepository.criar(dados);
};

export const listar = async () => {
  return await usuarioInteresseRepository.listar();
};

export const visualizar = async (usuario_id, interesse_id) => {
  const ui = await usuarioInteresseRepository.visualizar(usuario_id, interesse_id);
  if (!ui) throw new Error('Relação usuário-interesse não encontrada');
  return ui;
};

export const deletar = async (usuario_id, interesse_id) => {
  const deleted = await usuarioInteresseRepository.deletar(usuario_id, interesse_id);
  if (!deleted) throw new Error('Relação usuário-interesse não encontrada');
  return true;
};

import db from '../db/index.js';

export const criar = async (dados) => {
  await db('usuarios_interesses').insert(dados);
  return await visualizar(dados.usuario_id, dados.interesse_id);
};

export const listar = async () => {
  return await db('usuarios_interesses').select('*');
};

export const visualizar = async (usuario_id, interesse_id) => {
  return await db('usuarios_interesses').where({ usuario_id, interesse_id }).first();
};

export const deletar = async (usuario_id, interesse_id) => {
  return await db('usuarios_interesses').where({ usuario_id, interesse_id }).del();
};

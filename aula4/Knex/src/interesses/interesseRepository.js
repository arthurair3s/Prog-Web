import db from '../db/index.js';

export const criar = async (dados) => {
  const [id] = await db('interesses').insert(dados).returning('id');
  return await visualizar(id.id || id);
};

export const listar = async () => {
  return await db('interesses').select('*');
};

export const visualizar = async (id) => {
  return await db('interesses').where({ id }).first();
};

export const atualizar = async (id, dados) => {
  await db('interesses').where({ id }).update(dados);
  return await visualizar(id);
};

export const deletar = async (id) => {
  return await db('interesses').where({ id }).del();
};

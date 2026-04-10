import db from '../db/index.js';
import crypto from 'crypto';

export const criar = async (dados) => {
  const id = crypto.randomUUID();
  const match = {
    id,
    ...dados,
    criado_em: new Date()
  };
  await db('matches').insert(match);
  return await visualizar(id);
};

export const listar = async () => {
  return await db('matches').select('*');
};

export const visualizar = async (id) => {
  return await db('matches').where({ id }).first();
};

export const deletar = async (id) => {
  return await db('matches').where({ id }).del();
};

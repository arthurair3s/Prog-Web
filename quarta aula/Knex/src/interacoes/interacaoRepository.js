import db from '../db/index.js';
import crypto from 'crypto';

export const criar = async (dados) => {
  const id = crypto.randomUUID();
  const interacao = {
    id,
    ...dados,
    criado_em: new Date()
  };
  await db('interacoes').insert(interacao);
  return await visualizar(id);
};

export const listar = async () => {
  return await db('interacoes').select('*');
};

export const visualizar = async (id) => {
  return await db('interacoes').where({ id }).first();
};

export const atualizar = async (id, dados) => {
  await db('interacoes').where({ id }).update(dados);
  return await visualizar(id);
};

export const deletar = async (id) => {
  return await db('interacoes').where({ id }).del();
};

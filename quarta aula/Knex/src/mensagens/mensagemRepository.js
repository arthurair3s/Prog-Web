import db from '../db/index.js';
import crypto from 'crypto';

export const criar = async (dados) => {
  const id = crypto.randomUUID();
  const mensagem = {
    id,
    ...dados,
    enviado_em: new Date()
  };
  await db('mensagens').insert(mensagem);
  return await visualizar(id);
};

export const listar = async () => {
  return await db('mensagens').select('*');
};

export const visualizar = async (id) => {
  return await db('mensagens').where({ id }).first();
};

export const deletar = async (id) => {
  return await db('mensagens').where({ id }).del();
};

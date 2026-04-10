import db from '../db/index.js';
import crypto from 'crypto';

export const criar = async (dados) => {
  const id = crypto.randomUUID();
  const usuario = {
    id,
    ...dados,
    criado_em: new Date(),
    atualizado_em: new Date()
  };
  await db('usuarios').insert(usuario);
  return await visualizar(id);
};

export const listar = async () => {
  return await db('usuarios').select('*');
};

export const visualizar = async (id) => {
  return await db('usuarios').where({ id }).first();
};

export const atualizar = async (id, dados) => {
  const atualizacao = {
    ...dados,
    atualizado_em: new Date()
  };
  await db('usuarios').where({ id }).update(atualizacao);
  return await visualizar(id);
};

export const deletar = async (id) => {
  return await db('usuarios').where({ id }).del();
};

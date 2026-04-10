import db from '../db/index.js';
import crypto from 'crypto';

export const criar = async (dados) => {
  const id = crypto.randomUUID();
  const endereco = {
    id,
    ...dados
  };
  await db('enderecos').insert(endereco);
  return await visualizar(id);
};

export const listar = async () => {
  return await db('enderecos').select('*');
};

export const visualizar = async (id) => {
  return await db('enderecos').where({ id }).first();
};

export const atualizar = async (id, dados) => {
  await db('enderecos').where({ id }).update(dados);
  return await visualizar(id);
};

export const deletar = async (id) => {
  return await db('enderecos').where({ id }).del();
};

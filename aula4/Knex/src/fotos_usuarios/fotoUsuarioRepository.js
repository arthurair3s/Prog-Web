import db from '../db/index.js';
import crypto from 'crypto';

export const criar = async (dados) => {
  const id = crypto.randomUUID();
  const foto = {
    id,
    ...dados,
    criado_em: new Date()
  };
  await db('fotos_usuarios').insert(foto);
  return await visualizar(id);
};

export const listar = async () => {
  return await db('fotos_usuarios').select('*');
};

export const visualizar = async (id) => {
  return await db('fotos_usuarios').where({ id }).first();
};

export const atualizar = async (id, dados) => {
  await db('fotos_usuarios').where({ id }).update(dados);
  return await visualizar(id);
};

export const deletar = async (id) => {
  return await db('fotos_usuarios').where({ id }).del();
};

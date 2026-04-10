import db from '../db/index.js';

export const criar = async (dados) => {
  return await db.Interacao.create(dados);
};

export const listar = async () => {
  return await db.Interacao.findAll();
};

export const visualizar = async (id) => {
  return await db.Interacao.findByPk(id);
};

export const atualizar = async (id, dados) => {
  const interacao = await visualizar(id);
  if (interacao) {
    return await interacao.update(dados);
  }
  return null;
};

export const deletar = async (id) => {
  const interacao = await visualizar(id);
  if (interacao) {
    await interacao.destroy();
    return true;
  }
  return false;
};

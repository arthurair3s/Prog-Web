import db from '../db/index.js';

export const criar = async (dados) => {
  return await db.Match.create(dados);
};

export const listar = async () => {
  return await db.Match.findAll();
};

export const visualizar = async (id) => {
  return await db.Match.findByPk(id);
};

export const atualizar = async (id, dados) => {
  const matchObj = await visualizar(id);
  if (matchObj) {
    return await matchObj.update(dados);
  }
  return null;
};

export const deletar = async (id) => {
  const matchObj = await visualizar(id);
  if (matchObj) {
    await matchObj.destroy();
    return true;
  }
  return false;
};

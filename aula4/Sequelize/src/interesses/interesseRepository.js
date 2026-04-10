import db from '../db/index.js';

export const criar = async (dados) => {
  return await db.Interesse.create(dados);
};

export const listar = async () => {
  return await db.Interesse.findAll();
};

export const visualizar = async (id) => {
  return await db.Interesse.findByPk(id);
};

export const atualizar = async (id, dados) => {
  const interesse = await visualizar(id);
  if (interesse) {
    return await interesse.update(dados);
  }
  return null;
};

export const deletar = async (id) => {
  const interesse = await visualizar(id);
  if (interesse) {
    await interesse.destroy();
    return true;
  }
  return false;
};

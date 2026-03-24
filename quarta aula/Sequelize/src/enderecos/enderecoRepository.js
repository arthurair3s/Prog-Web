import db from '../db/index.js';

export const criar = async (dados) => {
  return await db.Endereco.create(dados);
};

export const listar = async () => {
  return await db.Endereco.findAll();
};

export const visualizar = async (id) => {
  return await db.Endereco.findByPk(id);
};

export const atualizar = async (id, dados) => {
  const endereco = await visualizar(id);
  if (endereco) {
    return await endereco.update(dados);
  }
  return null;
};

export const deletar = async (id) => {
  const endereco = await visualizar(id);
  if (endereco) {
    await endereco.destroy();
    return true;
  }
  return false;
};

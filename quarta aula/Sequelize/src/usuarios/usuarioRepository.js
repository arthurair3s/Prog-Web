import db from '../db/index.js';

export const criar = async (dados) => {
  return await db.Usuario.create(dados);
};

export const listar = async () => {
  return await db.Usuario.findAll();
};

export const visualizar = async (id) => {
  return await db.Usuario.findByPk(id);
};

export const atualizar = async (id, dados) => {
  const usuario = await visualizar(id);
  if (usuario) {
    return await usuario.update(dados);
  }
  return null;
};

export const deletar = async (id) => {
  const usuario = await visualizar(id);
  if (usuario) {
    await usuario.destroy();
    return true;
  }
  return false;
};

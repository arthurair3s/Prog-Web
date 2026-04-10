import db from '../db/index.js';

export const criar = async (dados) => {
  return await db.FotoUsuario.create(dados);
};

export const listar = async () => {
  return await db.FotoUsuario.findAll();
};

export const visualizar = async (id) => {
  return await db.FotoUsuario.findByPk(id);
};

export const atualizar = async (id, dados) => {
  const foto = await visualizar(id);
  if (foto) {
    return await foto.update(dados);
  }
  return null;
};

export const deletar = async (id) => {
  const foto = await visualizar(id);
  if (foto) {
    await foto.destroy();
    return true;
  }
  return false;
};

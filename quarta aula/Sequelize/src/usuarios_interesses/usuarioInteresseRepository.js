import db from '../db/index.js';

export const criar = async (dados) => {
  return await db.UsuarioInteresse.create(dados);
};

export const listar = async () => {
  return await db.UsuarioInteresse.findAll();
};

export const visualizar = async (usuario_id, interesse_id) => {
  return await db.UsuarioInteresse.findOne({
    where: { usuario_id, interesse_id }
  });
};

export const deletar = async (usuario_id, interesse_id) => {
  const ui = await visualizar(usuario_id, interesse_id);
  if (ui) {
    await ui.destroy();
    return true;
  }
  return false;
};

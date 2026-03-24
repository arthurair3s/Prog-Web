import db from '../db/index.js';

export const criar = async (dados) => {
  return await db.Mensagem.create(dados);
};

export const listar = async () => {
  return await db.Mensagem.findAll();
};

export const visualizar = async (id) => {
  return await db.Mensagem.findByPk(id);
};

export const atualizar = async (id, dados) => {
  const mensagem = await visualizar(id);
  if (mensagem) {
    return await mensagem.update(dados);
  }
  return null;
};

export const deletar = async (id) => {
  const mensagem = await visualizar(id);
  if (mensagem) {
    await mensagem.destroy();
    return true;
  }
  return false;
};

import * as fotoUsuarioRepository from './fotoUsuarioRepository.js';

export const criar = async (dados) => {
  return await fotoUsuarioRepository.criar(dados);
};

export const listar = async () => {
  return await fotoUsuarioRepository.listar();
};

export const visualizar = async (id) => {
  const foto = await fotoUsuarioRepository.visualizar(id);
  if (!foto) throw new Error('Foto não encontrada');
  return foto;
};

export const atualizar = async (id, dados) => {
  const foto = await fotoUsuarioRepository.atualizar(id, dados);
  if (!foto) throw new Error('Foto não encontrada');
  return foto;
};

export const deletar = async (id) => {
  const deleted = await fotoUsuarioRepository.deletar(id);
  if (!deleted) throw new Error('Foto não encontrada');
  return true;
};

import * as fotoUsuarioService from './fotoUsuarioService.js';

export const criarFotoUsuario = async (req, res) => {
  try {
    const foto = await fotoUsuarioService.criar(req.body);
    res.status(201).json(foto);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const listarFotosUsuarios = async (req, res) => {
  try {
    const fotos = await fotoUsuarioService.listar();
    res.status(200).json(fotos);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const visualizarFotoUsuario = async (req, res) => {
  try {
    const foto = await fotoUsuarioService.visualizar(req.params.id);
    res.status(200).json(foto);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const atualizarFotoUsuario = async (req, res) => {
  try {
    const foto = await fotoUsuarioService.atualizar(req.params.id, req.body);
    res.status(200).json(foto);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deletarFotoUsuario = async (req, res) => {
  try {
    await fotoUsuarioService.deletar(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).send(error.message);
  }
};

import * as usuarioService from './usuarioService.js';

export const criarUsuario = async (req, res) => {
  try {
    const usuario = await usuarioService.criar(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioService.listar();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const visualizarUsuario = async (req, res) => {
  try {
    const usuario = await usuarioService.visualizar(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const atualizarUsuario = async (req, res) => {
  try {
    const usuario = await usuarioService.atualizar(req.params.id, req.body);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deletarUsuario = async (req, res) => {
  try {
    await usuarioService.deletar(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).send(error.message);
  }
};

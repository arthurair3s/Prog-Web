import * as usuarioInteresseService from './usuarioInteresseService.js';

export const criarUsuarioInteresse = async (req, res) => {
  try {
    const usuarioInteresse = await usuarioInteresseService.criar(req.body);
    res.status(201).json(usuarioInteresse);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const listarUsuariosInteresses = async (req, res) => {
  try {
    const usuariosInteresses = await usuarioInteresseService.listar();
    res.status(200).json(usuariosInteresses);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const visualizarUsuarioInteresse = async (req, res) => {
  try {
    const { usuario_id, interesse_id } = req.params;
    const usuarioInteresse = await usuarioInteresseService.visualizar(usuario_id, interesse_id);
    res.status(200).json(usuarioInteresse);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deletarUsuarioInteresse = async (req, res) => {
  try {
    const { usuario_id, interesse_id } = req.params;
    await usuarioInteresseService.deletar(usuario_id, interesse_id);
    res.status(204).send();
  } catch (error) {
    res.status(404).send(error.message);
  }
};

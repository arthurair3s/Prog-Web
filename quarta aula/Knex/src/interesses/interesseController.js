import * as interesseService from './interesseService.js';

export const criarInteresse = async (req, res) => {
  try {
    const interesse = await interesseService.criar(req.body);
    res.status(201).json(interesse);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const listarInteresses = async (req, res) => {
  try {
    const interesses = await interesseService.listar();
    res.status(200).json(interesses);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const visualizarInteresse = async (req, res) => {
  try {
    const interesse = await interesseService.visualizar(req.params.id);
    res.status(200).json(interesse);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const atualizarInteresse = async (req, res) => {
  try {
    const interesse = await interesseService.atualizar(req.params.id, req.body);
    res.status(200).json(interesse);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deletarInteresse = async (req, res) => {
  try {
    await interesseService.deletar(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).send(error.message);
  }
};

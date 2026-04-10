import * as matchService from './matchService.js';

export const criarMatch = async (req, res) => {
  try {
    const match = await matchService.criar(req.body);
    res.status(201).json(match);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const listarMatches = async (req, res) => {
  try {
    const matches = await matchService.listar();
    res.status(200).json(matches);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const visualizarMatch = async (req, res) => {
  try {
    const match = await matchService.visualizar(req.params.id);
    res.status(200).json(match);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deletarMatch = async (req, res) => {
  try {
    await matchService.deletar(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).send(error.message);
  }
};

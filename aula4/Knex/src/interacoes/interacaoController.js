import * as interacaoService from './interacaoService.js';

export const criarInteracao = async (req, res) => {
  try {
    const interacao = await interacaoService.criar(req.body);
    res.status(201).json(interacao);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const listarInteracoes = async (req, res) => {
  try {
    const interacoes = await interacaoService.listar();
    res.status(200).json(interacoes);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const visualizarInteracao = async (req, res) => {
  try {
    const interacao = await interacaoService.visualizar(req.params.id);
    res.status(200).json(interacao);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const atualizarInteracao = async (req, res) => {
  try {
    const interacao = await interacaoService.atualizar(req.params.id, req.body);
    res.status(200).json(interacao);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deletarInteracao = async (req, res) => {
  try {
    await interacaoService.deletar(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).send(error.message);
  }
};

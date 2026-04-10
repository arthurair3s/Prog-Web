import * as mensagemService from './mensagemService.js';

export const criarMensagem = async (req, res) => {
  try {
    const mensagem = await mensagemService.criar(req.body);
    res.status(201).json(mensagem);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const listarMensagens = async (req, res) => {
  try {
    const mensagens = await mensagemService.listar();
    res.status(200).json(mensagens);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const visualizarMensagem = async (req, res) => {
  try {
    const mensagem = await mensagemService.visualizar(req.params.id);
    res.status(200).json(mensagem);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deletarMensagem = async (req, res) => {
  try {
    await mensagemService.deletar(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).send(error.message);
  }
};

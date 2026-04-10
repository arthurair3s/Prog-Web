import * as enderecoService from './enderecoService.js';

export const criarEndereco = async (req, res) => {
  try {
    const endereco = await enderecoService.criar(req.body);
    res.status(201).json(endereco);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const listarEnderecos = async (req, res) => {
  try {
    const enderecos = await enderecoService.listar();
    res.status(200).json(enderecos);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const visualizarEndereco = async (req, res) => {
  try {
    const endereco = await enderecoService.visualizar(req.params.id);
    res.status(200).json(endereco);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const atualizarEndereco = async (req, res) => {
  try {
    const endereco = await enderecoService.atualizar(req.params.id, req.body);
    res.status(200).json(endereco);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deletarEndereco = async (req, res) => {
  try {
    await enderecoService.deletar(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).send(error.message);
  }
};

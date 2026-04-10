export const criarCliente = async (req, res) => {
  const clientes = clienteService.criar(req.body)
  res.status(201).json(clientes)
}

export const listarClientes = async (req, res) => {
  const clientes = clienteService.listar()
  res.status(200).json(clientes)
}

export const visualizarCliente = async (req, res) => {
  const clientes = clienteService.visualizar(req.params.id)
  res.status(200).json(clientes)
}

export const atualizarCliente = async (req, res) => {
  const clientes = clienteService.atualizar(req.params.id, req.body)
  res.status(200).json(clientes)
}

export const deletarCliente = async (req, res) => {
  const clientes = clienteService.deletar(req.params.id)
  res.status(204).json(clientes)
}

import express from 'express';

import usuarioRouter from './usuarios/usuarioRouter.js';
import enderecoRouter from './enderecos/enderecoRouter.js';
import interesseRouter from './interesses/interesseRouter.js';
import usuarioInteresseRouter from './usuarios_interesses/usuarioInteresseRouter.js';
import fotoUsuarioRouter from './fotos_usuarios/fotoUsuarioRouter.js';
import interacaoRouter from './interacoes/interacaoRouter.js';
import matchRouter from './matches/matchRouter.js';
import mensagemRouter from './mensagens/mensagemRouter.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/usuarios', usuarioRouter);
app.use('/enderecos', enderecoRouter);
app.use('/interesses', interesseRouter);
app.use('/usuarios-interesses', usuarioInteresseRouter);
app.use('/fotos-usuarios', fotoUsuarioRouter);
app.use('/interacoes', interacaoRouter);
app.use('/matches', matchRouter);
app.use('/mensagens', mensagemRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

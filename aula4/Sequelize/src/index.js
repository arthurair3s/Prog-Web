import express from 'express';
import db from './db/index.js';

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

db.sequelize.sync({ force: false }).then(() => {
  console.log('Banco de dados sincronizado (Sequelize)');
  app.listen(PORT, () => {
    console.log(`Servidor (Sequelize) rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error('Erro ao conectar com o banco de dados:', err);
});

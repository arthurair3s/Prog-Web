import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false
});

import { definirUsuarioModel } from '../usuarios/Usuario.js';
import { definirEnderecoModel } from '../enderecos/Endereco.js';
import { definirInteresseModel } from '../interesses/Interesse.js';
import { definirUsuarioInteresseModel } from '../usuarios_interesses/UsuarioInteresse.js';
import { definirFotoUsuarioModel } from '../fotos_usuarios/FotoUsuario.js';
import { definirInteracaoModel } from '../interacoes/Interacao.js';
import { definirMatchModel } from '../matches/Match.js';
import { definirMensagemModel } from '../mensagens/Mensagem.js';

const db = {};

db.Usuario = definirUsuarioModel(sequelize);
db.Endereco = definirEnderecoModel(sequelize);
db.Interesse = definirInteresseModel(sequelize);
db.UsuarioInteresse = definirUsuarioInteresseModel(sequelize);
db.FotoUsuario = definirFotoUsuarioModel(sequelize);
db.Interacao = definirInteracaoModel(sequelize);
db.Match = definirMatchModel(sequelize);
db.Mensagem = definirMensagemModel(sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

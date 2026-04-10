import { DataTypes } from 'sequelize';

export const definirMensagemModel = (sequelize) => {
  const Mensagem = sequelize.define('mensagem', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    conteudo: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'mensagens',
    timestamps: true,
    createdAt: 'enviado_em',
    updatedAt: false
  });

  Mensagem.associate = (models) => {
    Mensagem.belongsTo(models.Match, { foreignKey: 'match_id', as: 'match' });
    Mensagem.belongsTo(models.Usuario, { foreignKey: 'remetente_id', as: 'remetente' });
  };

  return Mensagem;
};

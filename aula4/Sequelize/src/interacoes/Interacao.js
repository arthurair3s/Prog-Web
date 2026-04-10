import { DataTypes } from 'sequelize';

export const definirInteracaoModel = (sequelize) => {
  const Interacao = sequelize.define('interacao', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'interacoes',
    timestamps: true,
    createdAt: 'criado_em',
    updatedAt: false
  });

  Interacao.associate = (models) => {
    Interacao.belongsTo(models.Usuario, { foreignKey: 'usuario_origem', as: 'origem' });
    Interacao.belongsTo(models.Usuario, { foreignKey: 'usuario_destino', as: 'destino' });
  };

  return Interacao;
};

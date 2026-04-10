import { DataTypes } from 'sequelize';

export const definirMatchModel = (sequelize) => {
  const Match = sequelize.define('match', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    }
  }, {
    tableName: 'matches',
    timestamps: true,
    createdAt: 'criado_em',
    updatedAt: false
  });

  Match.associate = (models) => {
    Match.belongsTo(models.Usuario, { foreignKey: 'usuario1_id', as: 'usuario1' });
    Match.belongsTo(models.Usuario, { foreignKey: 'usuario2_id', as: 'usuario2' });
    Match.hasMany(models.Mensagem, { foreignKey: 'match_id', as: 'mensagens' });
  };

  return Match;
};

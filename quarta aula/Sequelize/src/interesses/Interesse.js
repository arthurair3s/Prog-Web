import { DataTypes } from 'sequelize';

export const definirInteresseModel = (sequelize) => {
  const Interesse = sequelize.define('interesse', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'interesses',
    timestamps: false
  });

  Interesse.associate = (models) => {
    Interesse.belongsToMany(models.Usuario, {
      through: models.UsuarioInteresse,
      foreignKey: 'interesse_id',
      otherKey: 'usuario_id',
      as: 'usuarios'
    });
  };

  return Interesse;
};

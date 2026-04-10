import { DataTypes } from 'sequelize';

export const definirUsuarioInteresseModel = (sequelize) => {
  const UsuarioInteresse = sequelize.define('usuario_interesse', {
    usuario_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    interesse_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'interesses',
        key: 'id'
      }
    }
  }, {
    tableName: 'usuarios_interesses',
    timestamps: false
  });

  return UsuarioInteresse;
};

import { DataTypes } from 'sequelize';

export const definirUsuarioModel = (sequelize) => {
  const Usuario = sequelize.define('usuario', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING(20)
    },
    bio: {
      type: DataTypes.STRING(300)
    }
  }, {
    tableName: 'usuarios',
    timestamps: true,
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
  });

  return Usuario;
};

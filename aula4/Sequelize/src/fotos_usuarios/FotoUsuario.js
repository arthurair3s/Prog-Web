import { DataTypes } from 'sequelize';

export const definirFotoUsuarioModel = (sequelize) => {
  const FotoUsuario = sequelize.define('foto_usuario', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    url_foto: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    principal: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    tableName: 'fotos_usuarios',
    timestamps: true,
    createdAt: 'criado_em',
    updatedAt: false
  });

  FotoUsuario.associate = (models) => {
    FotoUsuario.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
    models.Usuario.hasMany(FotoUsuario, { foreignKey: 'usuario_id', as: 'fotos' });
  };

  return FotoUsuario;
};

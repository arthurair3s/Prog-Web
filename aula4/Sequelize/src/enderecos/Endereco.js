import { DataTypes } from 'sequelize';

export const definirEnderecoModel = (sequelize) => {
  const Endereco = sequelize.define('endereco', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    logradouro: {
      type: DataTypes.STRING(150)
    },
    numero: {
      type: DataTypes.STRING(10)
    },
    complemento: {
      type: DataTypes.STRING(50)
    },
    bairro: {
      type: DataTypes.STRING(100)
    },
    cidade: {
      type: DataTypes.STRING(100)
    },
    estado: {
      type: DataTypes.STRING(50)
    },
    cep: {
      type: DataTypes.STRING(15)
    },
    latitude: {
      type: DataTypes.DECIMAL(9, 6)
    },
    longitude: {
      type: DataTypes.DECIMAL(9, 6)
    }
  }, {
    tableName: 'enderecos',
    timestamps: false
  });

  Endereco.associate = (models) => {
    Endereco.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
    models.Usuario.hasMany(Endereco, { foreignKey: 'usuario_id', as: 'enderecos' });
  };

  return Endereco;
};

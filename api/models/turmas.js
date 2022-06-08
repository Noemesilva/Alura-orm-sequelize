'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Turmas.hasMany(models.Matriculas, {
        foreignKey: ''
      })
      Turmas.belongsTo(models.Pessoas, { //pertenca a
        foreignKey: 'docente_id'
      }) 
      Turmas.belongsTo(models.Niveis, {
        foreignKey: 'nivel_id'
      })
    }
  }
  Turmas.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};
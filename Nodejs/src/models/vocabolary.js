'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vocabolary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vocabolary.init({
    lessionId: DataTypes.INTEGER,
    word: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Vocabolary',
  });
  return Vocabolary;
};
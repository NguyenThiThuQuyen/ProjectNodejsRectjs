'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wordmean extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Wordmean.init({
    vocabolaryId: DataTypes.INTEGER,
    meaning: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Wordmean',
  });
  return Wordmean;
};
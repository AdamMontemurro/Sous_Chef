'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meal extends Model {
    static associate(models) {
      Meal.belongsToMany(models.User, {
        foreignKey: 'user_id',
        through: 'favorites',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Meal.belongsToMany(models.User, {
        foreignKey: 'user_id',
        through: 'favorites',
        as: 'owner',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Meal.hasMany(models.Comment, {
        foreignKey: 'meal_id',
        as: 'comments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Meal.init({
    createdby: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT('long'),
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cook_time: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    cuisine: {
      type: DataTypes.STRING,
      allowNull: true
    },
    diet_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ingredients: {
      type: DataTypes.TEXT('long'),
      allowNull: true
    },
    meal_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Meal',
    tableName: 'meals'
  });
  return Meal;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const CookBookRecipe = sequelize.define('CookBookRecipe', {
    recipeId: DataTypes.INTEGER,
    cookBookId: DataTypes.INTEGER,
    cooked: DataTypes.BOOLEAN
  }, {});
  CookBookRecipe.associate = function(models) {
    // associations can be defined here
  };
  return CookBookRecipe;
};
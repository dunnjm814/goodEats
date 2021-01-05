'use strict';
module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        title: DataTypes.STRING,
        foodImg: DataTypes.STRING,
        description: DataTypes.TEXT,
        ingredients: DataTypes.TEXT,
        directions: DataTypes.TEXT,
        recipeType: DataTypes.STRING,
        dietType: DataTypes.STRING,
        rating: DataTypes.INTEGER
    }, {});
    Recipe.associate = function(models) {
        const columnMapping = {
            through: 'CookBookRecipe',
            otherKey: 'cookBookId',
            foreignKey: 'recipeId'
        };
        Recipe.belongsToMany(models.CookBook, columnMapping);
        Recipe.hasMany(models.Review, { foreignKey: 'recipeId' });
    };
    return Recipe;
};
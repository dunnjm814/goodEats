'use strict';
module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        foodImg: DataTypes.STRING,
        description: DataTypes.TEXT,
        prep: DataTypes.TEXT,
        cookSteps: DataTypes.TEXT,
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
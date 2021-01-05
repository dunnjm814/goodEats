'use strict';
module.exports = (sequelize, DataTypes) => {
    const CookBook = sequelize.define('CookBook', {
        userId: DataTypes.INTEGER,
        name: DataTypes.STRING(50)
    }, {});
    CookBook.associate = function(models) {
        CookBook.belongsTo(models.User, { foreignKey: 'userId' });
        const columnMapping = {
            through: 'CookBookRecipe',
            otherKey: 'recipeId',
            foreignKey: 'cookBookId'
        }
        CookBook.belongsToMany(models.Recipe, columnMapping)
    };
    return CookBook;
};

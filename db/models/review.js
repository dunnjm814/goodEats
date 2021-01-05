'use strict';
module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        userId: DataTypes.INTEGER,
        recipeId: DataTypes.INTEGER,
        revContent: DataTypes.TEXT(400),
        rating: DataTypes.INTEGER
    }, {});
    Review.associate = function(models) {
        Review.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
        Review.belongsTo(models.User, { foreignKey: 'userId' });
    };
    return Review;
};

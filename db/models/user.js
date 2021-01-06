'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userName: DataTypes.STRING(50),
        email: DataTypes.STRING(100),
        hashPass: DataTypes.STRING
    }, {});
    User.associate = function(models) {
        User.hasMany(models.CookBook, { foreignKey: 'userId' });
        User.hasMany(models.Review, { foreignKey: 'userId' });
    };
    return User;
};
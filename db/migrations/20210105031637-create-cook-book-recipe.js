'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('CookBookRecipes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            recipeId: {
                references: {
                    model: 'Recipes'
                },
                allowNull: false,
                type: Sequelize.INTEGER
            },
            cookBookId: {
                references: {
                    model: 'CookBooks'
                },
                allowNull: false,
                type: Sequelize.INTEGER
            },
            cooked: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('CookBookRecipes');
    }
};
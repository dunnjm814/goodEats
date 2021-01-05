'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Reviews', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                references: {
                    model: 'Users'
                },
                allowNull: false,
                type: Sequelize.INTEGER
            },
            recipeId: {
                references: {
                    model: 'Recipes'
                },
                allowNull: false,
                type: Sequelize.INTEGER
            },
            revContent: {
                allowNull: false,
                type: Sequelize.TEXT(400)
            },
            rating: {
                allowNull: false,
                type: Sequelize.INTEGER
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
        return queryInterface.dropTable('Reviews');
    }
};
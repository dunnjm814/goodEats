'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Recipes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            foodImg: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            prep: {
                type: Sequelize.TEXT
            },
            cookSteps: {
                type: Sequelize.TEXT
            },
            recipeType: {
                type: Sequelize.STRING
            },
            dietType: {
                type: Sequelize.STRING
            },
            rating: {
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
        return queryInterface.dropTable('Recipes');
    }
};
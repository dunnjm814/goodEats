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
                allowNull: false,
                type: Sequelize.STRING(100)
            },
            foodImg: {
                allowNull: false,
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            ingredients: {
                type: Sequelize.TEXT
            },
            directions: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            recipeType: {
                allowNull: false,
                type: Sequelize.STRING
            },
            dietType: {
                allowNull: false,
                type: Sequelize.STRING
            },
            avgRating: {
                type: Sequelize.INTEGER
            },
            numReviews: {
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

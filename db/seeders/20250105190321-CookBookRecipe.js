'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */

        return queryInterface.bulkInsert('CookBookRecipes', [{
                recipeId: 1,
                cookBookId: 1,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 2,
                cookBookId: 1,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 3,
                cookBookId: 1,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 4,
                cookBookId: 1,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 5,
                cookBookId: 1,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 2,
                cookBookId: 2,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 3,
                cookBookId: 2,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 4,
                cookBookId: 2,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 5,
                cookBookId: 2,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 3,
                cookBookId: 3,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 4,
                cookBookId: 3,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 5,
                cookBookId: 3,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 4,
                cookBookId: 4,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 5,
                cookBookId: 5,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 6,
                cookBookId: 6,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 7,
                cookBookId: 6,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 8,
                cookBookId: 6,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 9,
                cookBookId: 6,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 10,
                cookBookId: 6,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 7,
                cookBookId: 7,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 8,
                cookBookId: 8,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 9,
                cookBookId: 7,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 10,
                cookBookId: 7,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 8,
                cookBookId: 8,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 9,
                cookBookId: 8,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 9,
                cookBookId: 8,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 9,
                cookBookId: 9,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                recipeId: 10,
                cookBookId: 10,
                cooked: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */

        return queryInterface.bulkDelete('CookBookRecipes', null, {});

    }
};
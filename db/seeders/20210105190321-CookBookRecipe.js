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
                cooked: false
            },
            {
                recipeId: 2,
                cookBookId: 1,
                cooked: false
            },
            {
                recipeId: 3,
                cookBookId: 1,
                cooked: false
            },
            {
                recipeId: 4,
                cookBookId: 1,
                cooked: false
            },
            {
                recipeId: 5,
                cookBookId: 1,
                cooked: false
            },
            {
                recipeId: 2,
                cookBookId: 2,
                cooked: false
            },
            {
                recipeId: 3,
                cookBookId: 2,
                cooked: false
            },
            {
                recipeId: 4,
                cookBookId: 2,
                cooked: false
            },
            {
                recipeId: 5,
                cookBookId: 2,
                cooked: false
            },
            {
                recipeId: 3,
                cookBookId: 3,
                cooked: false
            },
            {
                recipeId: 4,
                cookBookId: 3,
                cooked: false
            },
            {
                recipeId: 5,
                cookBookId: 3,
                cooked: false
            },
            {
                recipeId: 4,
                cookBookId: 4,
                cooked: false
            },
            {
                recipeId: 5,
                cookBookId: 5,
                cooked: false
            },
            {
                recipeId: 6,
                cookBookId: 6,
                cooked: false
            },
            {
                recipeId: 7,
                cookBookId: 6,
                cooked: false
            },
            {
                recipeId: 8,
                cookBookId: 6,
                cooked: false
            },
            {
                recipeId: 9,
                cookBookId: 6,
                cooked: false
            },
            {
                recipeId: 10,
                cookBookId: 6,
                cooked: false
            },
            {
                recipeId: 7,
                cookBookId: 7,
                cooked: false
            },
            {
                recipeId: 8,
                cookBookId: 8,
                cooked: false
            },
            {
                recipeId: 9,
                cookBookId: 7,
                cooked: false
            },
            {
                recipeId: 10,
                cookBookId: 7,
                cooked: false
            },
            {
                recipeId: 8,
                cookBookId: 8,
                cooked: false
            },
            {
                recipeId: 9,
                cookBookId: 8,
                cooked: false
            },
            {
                recipeId: 9,
                cookBookId: 8,
                cooked: false
            },
            {
                recipeId: 9,
                cookBookId: 9,
                cooked: false
            },
            {
                recipeId: 10,
                cookBookId: 10,
                cooked: false
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
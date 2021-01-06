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

        return queryInterface.bulkInsert('CookBooks', [{
                userId: 1,
                name: 'Aphrodisiacs',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 1,
                name: 'Literal Poison',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                name: 'For My Friends',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                name: 'For My Enemies',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 3,
                name: 'Mexican',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 3,
                name: 'Chinese',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 4,
                name: 'Wedding',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 4,
                name: 'Funeral',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 5,
                name: 'Christmas',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 5,
                name: 'PARTYYYYY',
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

        return queryInterface.bulkDelete('CookBooks', null, {});

    }
};
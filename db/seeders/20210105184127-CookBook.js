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
                name: 'Aphrodisiacs'
            },
            {
                userId: 1,
                name: 'Literal Poison'
            },
            {
                userId: 2,
                name: 'For My Friends'
            },
            {
                userId: 2,
                name: 'For My Enemies'
            },
            {
                userId: 3,
                name: 'Mexican'
            },
            {
                userId: 3,
                name: 'Chinese'
            },
            {
                userId: 4,
                name: 'Wedding'
            },
            {
                userId: 4,
                name: 'Funeral'
            },
            {
                userId: 5,
                name: 'Christmas'
            },
            {
                userId: 5,
                name: 'PARTYYYYY'
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

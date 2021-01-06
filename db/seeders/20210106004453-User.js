'use strict';
 const createUsers = require('../../userSeeding.js') //from '../../userSeeding.js';

module.exports = {
  up: (queryInterface, Sequelize) => {

  return createUsers().then(users => {
    queryInterface.bulkInsert('Users', users, {})
  });

},
down: (queryInterface, Sequelize) => {

  return queryInterface.bulkDelete('Users', null, {});
}
}

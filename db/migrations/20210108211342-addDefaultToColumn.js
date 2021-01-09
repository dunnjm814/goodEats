'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.changeColumn("Recipes", "avgRating", {
      defaultValue: 0,
      type: Sequelize.INTEGER,
    });
    await queryInterface.changeColumn("Recipes", "numReviews", {
      defaultValue: 0,
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.changeColumn("Recipes", "avgRating", {
      defaultValue: null,
      type: Sequelize.INTEGER,
    });
    await queryInterface.changeColumn("Recipes", "numReviews", {
      defaultValue: null,
      type: Sequelize.INTEGER,
    });
  }
};

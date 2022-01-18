'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert("Reviews", [{
    title: "Great Game",
    reviewText: "I spent half my life playing this game",
    rating: 4,
    gameId: 1,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};

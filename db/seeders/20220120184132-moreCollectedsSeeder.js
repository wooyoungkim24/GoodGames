'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert("Collecteds", [
     {gameId: 1,collectionsId:2,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 1,collectionsId:3,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 1,collectionsId:4,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 1,collectionsId:5,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 1,collectionsId:6,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 1,collectionsId:7,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 1,collectionsId:8,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 1,collectionsId:9,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 1,collectionsId:10,createdAt: new Date(),updatedAt: new Date()},

     {gameId: 2,collectionsId:11,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 2,collectionsId:12,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 2,collectionsId:13,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 2,collectionsId:14,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 2,collectionsId:15,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 2,collectionsId:16,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 2,collectionsId:17,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 2,collectionsId:18,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 2,collectionsId:19,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 2,collectionsId:20,createdAt: new Date(),updatedAt: new Date()},

     {gameId: 3,collectionsId:11,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 3,collectionsId:12,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 3,collectionsId:13,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 3,collectionsId:14,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 3,collectionsId:15,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 3,collectionsId:16,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 3,collectionsId:17,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 3,collectionsId:18,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 3,collectionsId:19,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 3,collectionsId:20,createdAt: new Date(),updatedAt: new Date()},

     {gameId: 4,collectionsId:21,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 4,collectionsId:22,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 4,collectionsId:23,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 4,collectionsId:24,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 4,collectionsId:25,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 4,collectionsId:26,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 4,collectionsId:27,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 4,collectionsId:28,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 4,collectionsId:29,createdAt: new Date(),updatedAt: new Date()},
     {gameId: 4,collectionsId:30,createdAt: new Date(),updatedAt: new Date()},

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Collecteds', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert("Collections", [
     {userId:2,name: "Have Played",createdAt: new Date(),updatedAt: new Date()},
     {userId:3,name: "Have Played",createdAt: new Date(),updatedAt: new Date()},
     {userId:4,name: "Have Played",createdAt: new Date(),updatedAt: new Date()},
     {userId:5,name: "Have Played",createdAt: new Date(),updatedAt: new Date()},
     {userId:6,name: "Have Played",createdAt: new Date(),updatedAt: new Date()},
     {userId:7,name: "Have Played",createdAt: new Date(),updatedAt: new Date()},
     {userId:8,name: "Have Played",createdAt: new Date(),updatedAt: new Date()},
     {userId:9,name: "Have Played",createdAt: new Date(),updatedAt: new Date()},
     {userId:10,name: "Have Played",createdAt: new Date(),updatedAt: new Date()},
     {userId:1,name: "Want to Play",createdAt: new Date(),updatedAt: new Date()},
     {userId:2,name: "Want to Play",createdAt: new Date(),updatedAt: new Date()},
     {userId:3,name: "Want to Play",createdAt: new Date(),updatedAt: new Date()},
     {userId:4,name: "Want to Play",createdAt: new Date(),updatedAt: new Date()},
     {userId:5,name: "Want to Play",createdAt: new Date(),updatedAt: new Date()},
     {userId:6,name: "Want to Play",createdAt: new Date(),updatedAt: new Date()},
     {userId:7,name: "Want to Play",createdAt: new Date(),updatedAt: new Date()},
     {userId:8,name: "Want to Play",createdAt: new Date(),updatedAt: new Date()},
     {userId:9,name: "Want to Play",createdAt: new Date(),updatedAt: new Date()},
     {userId:10,name: "Want to Play",createdAt: new Date(),updatedAt: new Date()},
     {userId:1,name: "Currently Playing",createdAt: new Date(),updatedAt: new Date()},
     {userId:2,name: "Currently Playing",createdAt: new Date(),updatedAt: new Date()},
     {userId:3,name: "Currently Playing",createdAt: new Date(),updatedAt: new Date()},
     {userId:4,name: "Currently Playing",createdAt: new Date(),updatedAt: new Date()},
     {userId:5,name: "Currently Playing",createdAt: new Date(),updatedAt: new Date()},
     {userId:6,name: "Currently Playing",createdAt: new Date(),updatedAt: new Date()},
     {userId:7,name: "Currently Playing",createdAt: new Date(),updatedAt: new Date()},
     {userId:8,name: "Currently Playing",createdAt: new Date(),updatedAt: new Date()},
     {userId:9,name: "Currently Playing",createdAt: new Date(),updatedAt: new Date()},
     {userId:10,name: "Currently Playing",createdAt: new Date(),updatedAt: new Date()},

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Collections', null, {});
  }
};

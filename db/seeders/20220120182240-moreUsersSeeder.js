'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
     {email: 'videogamer@123.com',hashedPassword: bcrypt.hashSync('password', 10), createdAt: new Date(), updatedAt: new Date()},
     {email: 'cheesewheel@aol.com',hashedPassword: bcrypt.hashSync('cheesygoodness', 10), createdAt: new Date(), updatedAt: new Date()},
     {email: 'gg@wp.com',hashedPassword: bcrypt.hashSync('nore', 10), createdAt: new Date(), updatedAt: new Date()},
     {email: 'sergeevandrey@visieonl.com',hashedPassword: bcrypt.hashSync('barca10', 10), createdAt: new Date(), updatedAt: new Date()},
     {email: 'corringreen@iseovels.com',hashedPassword: bcrypt.hashSync('corrin', 10), createdAt: new Date(), updatedAt: new Date()},
     {email: 'alenkach1ka@ilrlb.com',hashedPassword: bcrypt.hashSync('chicken', 10), createdAt: new Date(), updatedAt: new Date()},
     {email: 'emchris@dillimasti.com',hashedPassword: bcrypt.hashSync('noodlecake1', 10), createdAt: new Date(), updatedAt: new Date()},
     {email: 'garion100@mantutivi.com',hashedPassword: bcrypt.hashSync('hardstuck', 10), createdAt: new Date(), updatedAt: new Date()},
     {email: 'achilles316@partnerct.com',hashedPassword: bcrypt.hashSync('ajaxhello', 10), createdAt: new Date(), updatedAt: new Date()},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};

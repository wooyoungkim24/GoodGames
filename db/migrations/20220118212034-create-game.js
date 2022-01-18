'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(100)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      genre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      publisher: {
        allowNull: false,
        type: Sequelize.STRING
      },
      yearOfRelease: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      imgLink: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Games');
  }
};

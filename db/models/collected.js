'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collected = sequelize.define('Collected', {
    gameId: DataTypes.INTEGER,
    collectionsId: DataTypes.INTEGER
  }, {});
  Collected.associate = function(models) {
    // associations can be defined here
  };
  return Collected;
};
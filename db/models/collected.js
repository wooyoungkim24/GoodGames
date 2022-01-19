'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collected = sequelize.define('Collected', {
    gameId: DataTypes.INTEGER,
    collectionsId: DataTypes.INTEGER
  }, {});
  Collected.associate = function(models) {
    // associations can be defined here
    Collected.belongsTo(models.Game, {foreignKey: "gameId"})
    Collected.belongsTo(models.Collection, {foreignKey:"collectionId"})

  };
  return Collected;
};

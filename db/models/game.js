'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    genre: DataTypes.STRING,
    publisher: DataTypes.STRING,
    yearOfRelease: DataTypes.INTEGER,
    imgLink: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
    Game.hasMany(models.Collected, {foreignKey: "gameId"})
    Game.hasMany(models.Review, {foreignKey: "gameId"})
  };
  return Game;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    genre: DataTypes.STRING,
    publisher: DataTypes.STRING,
    yearOfRelease: DataTypes.DATE,
    imgLink: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    Game.hasMany(models.Collection, { foreignKey: 'gameId' });
    Game.hasMany(models.Review, { foreignKey: 'gameId' });
  };
  return Game;
};

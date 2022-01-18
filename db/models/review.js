'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: DataTypes.STRING,
    reviewText: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Game, { foreignKey: 'gameId' });
  };
  return Review;
};

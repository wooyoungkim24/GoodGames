'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    gameId: DataTypes.INTEGER
  }, {});
  Collection.associate = function(models) {
    Collection.belongsTo(models.Game, { foreignKey: 'gameId' });
    Collection.belongsToMany(models.User, {
      through: 'GroupOfCollection',
      otherKey: 'userId',
      foreignKey: 'groupOfCollectionsId'
    })
  };
  return Collection;
};

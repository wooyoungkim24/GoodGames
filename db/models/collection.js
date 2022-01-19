'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Collection.associate = function(models) {
    // associations can be defined here
    Collection.belongsTo(models.User, {foreignKey: "userId"})
    Collection.hasMany(models.Collected, {foreignKey: "collectionId"})
  };
  return Collection;
};

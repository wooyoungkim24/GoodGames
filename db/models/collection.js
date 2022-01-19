'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Collection.associate = function(models) {
    // associations can be defined here
  };
  return Collection;
};
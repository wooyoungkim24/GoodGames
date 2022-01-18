'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupOfCollection = sequelize.define('GroupOfCollection', {
    userId: DataTypes.INTEGER,
    collectionsId: DataTypes.INTEGER
  }, {});
  GroupOfCollection.associate = function(models) {
    // associations can be defined here
  };
  return GroupOfCollection;
};

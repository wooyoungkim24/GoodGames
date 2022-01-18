'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Review, { foreignKey: 'userId' });
    User.belongsToMany(models.Collection, {
      through: 'GroupOfCollection',
      otherKey: 'collectionsId',
      foreignKey: 'userId'
    })
  };
  return User;
};

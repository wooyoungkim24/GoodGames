'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Review, {foreignKey: "userId"})
    User.hasMany(models.Collection, {foreignKey:"userId"})
  };
  return User;
};

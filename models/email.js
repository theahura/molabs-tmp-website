'use strict';
module.exports = (sequelize, DataTypes) => {
  var Email = sequelize.define('Email', {
    email: {type: DataTypes.STRING, allowNull: false}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Email;
};
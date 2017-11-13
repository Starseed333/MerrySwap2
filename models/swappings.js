'use strict';

var Sequelize = require('sequelize');



module.exports = (sequelize, DataTypes) => {
  var Swappings = sequelize.define('Swappings', {
    firstPersonId: DataTypes.INTEGER,
    firstPersonProductID: DataTypes.INTEGER,
    secondPersonId: DataTypes.INTEGER,
    secondPersonProductID: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        var Products = this.sequelize.define('Products', {}),
        Users = this.sequelize.define('Users', {}),
        Swappings = this.sequelize.define('Swappings', {});

        Swappings.belongsToMany(Users, {through: 'SwapUser'});
        Users.belongsToMany(Swappings, {through: 'SwapUser'});

        Swappings.belongsToMany(Products, {through: 'SwapProduct'});
        Products.belongsToMany(Swappings, {through: 'SwapProduct'});
      }
    }
  });
  return Swappings;
};
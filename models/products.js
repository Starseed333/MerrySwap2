'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    product_name: DataTypes.STRING,
    description: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    category: DataTypes.STRING,
    scaleRating: DataTypes.INTEGER,
    swapStatus: DataTypes.BOOLEAN,
    UsersId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        var Products = this.sequelize.define('Products', {}),
        Users = this.sequelize.define('Users', {});

        Products.belongsTo(Users);
      }
    }
  });
  return Products;
};
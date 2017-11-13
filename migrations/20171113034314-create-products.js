'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      imageURL: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      scaleRating: {
        type: Sequelize.INTEGER
      },
      swapStatus: {
        type: Sequelize.BOOLEAN
      },
      UsersId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};
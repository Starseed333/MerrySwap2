'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Swappings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstPersonId: {
        type: Sequelize.INTEGER
      },
      firstPersonProductID: {
        type: Sequelize.INTEGER
      },
      secondPersonId: {
        type: Sequelize.INTEGER
      },
      secondPersonProductID: {
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
    return queryInterface.dropTable('Swappings');
  }
};
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Swappings', [{

      firsPersonID: 1,
      firsPersonProduct: 3,
      secondPersonID: 2,
      secondPersonProductID: 6

  }])

    
  },

  down: function (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Swappings', null, {truncate: true});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Products', [{
      product_name: 'Clothes',
      description: 'Sweater',
      imageURL: '../css/imgs/placeholder/sweater.jpg',
      category: 'Other',
      scaleRating: 5,
      UsersId: 1,
      swapStatus: 0
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */


    return (queryInterface, Sequelize){
      return queryInterface.bulkDelete('Products', null, {truncate: true});
  

  }
};

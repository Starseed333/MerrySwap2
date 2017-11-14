'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('Users', [{
      firstName: 'Stacy',
      lastName: 'Richardson',
      email: 'stacy@gmail.com',
      password: '1234',
      userImage:'../css/imgs/placeholder/profile2.jpg'
    }, {
      firstName: 'Luke',
      lastName: 'Johnson',
      email: 'luke@gmail.com',
      password: '123',
      userImage: '../css/imgs/placeholder/profile1.jpg'
    }, {
      firstName: 'Jim',
      lastName: 'Morris',
      email: 'jim@gmail.com',
      password: 'jim',
      userImage: '../css/imgs/placeholder/profile3.jpg'
    }, {
      firstName: 'Rachel',
      lastName: 'Zoe',
      email: 'rachel@gmail.com',
      password: '12345',
      userImage: '../css/imgs/placeholder/profile4.jpg'
    }], {}); 
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Users', null); 
  }
};
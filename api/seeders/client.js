'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('clients', [
      { name: 'John', email: 'fakemail@gmail.com', phone: '555-7777' },
      { name: 'Peter', email: 'fakemail2@gmail.com', phone: '555-5555' }
    ]);
  },

  down: function (queryInterface, Sequelize) {}
};

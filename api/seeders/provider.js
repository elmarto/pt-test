'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('providers', [
      { name: 'Apple' },
      { name: 'Microsoft' }
    ]);
  },

  down: function (queryInterface, Sequelize) {}
};

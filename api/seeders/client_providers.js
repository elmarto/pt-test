'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('client_providers', [
      { client_id: 1, provider_id: 1 },
      { client_id: 1, provider_id: 2 },
      { client_id: 2, provider_id: 2 }
    ]);
  },

  down: function (queryInterface, Sequelize) {}
};

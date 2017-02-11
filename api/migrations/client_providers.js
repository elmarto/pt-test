'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('client_providers', {
      client_id: { type: Sequelize.INTEGER },
      provider_id: { type: Sequelize.INTEGER },
      createdAt: { allowNull: false, type: Sequelize.DATE(3), defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)') },
      updatedAt: { allowNull: false, type: Sequelize.DATE(3), defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)') }
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('client_providers');
  }
};

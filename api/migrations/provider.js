'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('providers', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: Sequelize.STRING,
      createdAt: { allowNull: false, type: Sequelize.DATE(3), defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)') },
      updatedAt: { allowNull: false, type: Sequelize.DATE(3), defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)') }
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('providers');
  }
};

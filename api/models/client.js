'use strict';
let Sequelize = require('sequelize');

module.exports = (sequelize) => {
  var client = sequelize.define('client', {
    name:  { type: Sequelize.STRING(50) },
    email: { type: Sequelize.STRING(50) },
    phone: { type: Sequelize.STRING(50) }
  }, {
    classMethods: {
      associate: function(models) {
        client.belongsToMany(models.provider, {
          through: 'client_providers',
          foreignKey : 'client_id'
        });
      }
    }
  });

  return client;
};
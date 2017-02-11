'use strict';
let Sequelize = require('sequelize');

module.exports = (sequelize) => {
  var provider = sequelize.define('provider', {
    name:  { type: Sequelize.STRING(50) }
  }, {
    classMethods: {
      associate : function(models) {
        provider.belongsToMany(models.client, {
          through: 'client_providers',
          foreignKey : 'provider_id'  
        })
      }
    }
  });

  return provider;
};
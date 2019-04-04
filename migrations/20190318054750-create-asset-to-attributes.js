'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('asset_to_attributes', {
      asset_to_attributes_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      asset_id: {
        type: Sequelize.INTEGER
      },
      attribute_id: {
        type: Sequelize.INTEGER
      },
      attribute_value: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        timestamps: true,
        defaultValue: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        timestamps: true,
        defaultValue: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('asset_to_attributes');
  }
};
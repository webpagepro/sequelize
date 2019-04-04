'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('asset_to_notes', {
      asset_to_note_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      asset_id: {
        type: Sequelize.INTEGER
      },
      note_id: {
        type: Sequelize.INTEGER
      },
      notes: {
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
    return queryInterface.dropTable('asset_to_notes');
  }
};
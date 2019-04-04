'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categories', {
      category_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category_name: {
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
    return queryInterface.dropTable('categories');
  }
};
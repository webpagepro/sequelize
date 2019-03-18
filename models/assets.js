'use strict';
module.exports = (sequelize, DataTypes) => {
  const Assets = sequelize.define('Assets', {
    category_id: DataTypes.INTEGER
  }, {});
  Assets.associate = function(models) {
    // associations can be defined here
  };
  return Assets;
};
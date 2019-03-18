'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attributes = sequelize.define('Attributes', {
    attribute_id: DataTypes.INTEGER,
    attribute_name: DataTypes.STRING
  }, {});
  Attributes.associate = function(models) {
    // associations can be defined here
  };
  return Attributes;
};
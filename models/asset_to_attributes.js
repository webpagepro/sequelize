'use strict';
module.exports = (sequelize, DataTypes) => {
  const Asset_to_attributes = sequelize.define('Asset_to_attributes', {
    asset_id: DataTypes.INTEGER,
    attribute_id: DataTypes.INTEGER,
    attribute_value: DataTypes.TEXT
  }, {});
  Asset_to_attributes.associate = function(models) {
    // associations can be defined here
  };
  return Asset_to_attributes;
};
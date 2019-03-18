'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category_to_attributes = sequelize.define('Category_to_attributes', {
    attribute_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {});
  Category_to_attributes.associate = function(models) {
    // associations can be defined here
  };
  return Category_to_attributes;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    category_id: DataTypes.INTEGER,
    categroy_name: DataTypes.STRING
  }, {});
  Categories.associate = function(models) {
    // associations can be defined here
  };
  return Categories;
};
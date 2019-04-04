/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('categories', {
		category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		category_name: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('NOW()')
		  },
	  
		  updatedAt: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: sequelize.literal('NOW()')
		  }
	}, {
		timestamps: true,
		tableName: 'categories'
  });
  
  return categories;
};

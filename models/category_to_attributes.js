/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('category_to_attributes', {
		category_to_attributes_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		attribute_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
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
		tableName: 'category_to_attributes'
	});
	return category_to_attributes;
};

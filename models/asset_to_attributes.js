/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('asset_to_attributes', {
		asset_to_attributes_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		asset_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		attribute_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		attribute_value: {
			type: DataTypes.TEXT,
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
	},
	 {
		timestamps: true,
		tableName: 'asset_to_attributes'
	});

	return asset_to_attributes;
};
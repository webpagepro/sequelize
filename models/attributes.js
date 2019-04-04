/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('attributes', {
		attribute_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		attribute_name: {
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
	},
		{
			timestamps: true,
			tableName: 'attributes'

		});

	
	return attributes;

};

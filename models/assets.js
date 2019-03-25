/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('assets', {
		asset_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
    }
  }, 
    
  { 
    onDelete: 'CASCADE',
		tableName: 'assets'
  });

  /*
assets.associate = function(models) {
    models.assets.hasMany(models.asset_to_attributes);
  };
  */
  return assets;
};

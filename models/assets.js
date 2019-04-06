

module.exports = (sequelize, DataTypes) => {
  const assets = sequelize.define('assets', {
    asset_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },

    qrcode: {
      type: DataTypes.STRING,
      allowNull: true
    },

    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('NOW()')
    },

    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('NOW()')
    }
  },

    {
      timestamps: true,
      onDelete: 'CASCADE',
      tableName: 'assets',
      freezeTableName: true
    });



  /*  
  assets.associate = function(models) {
     models.assets.hasOne(models.categories);
   };
  categories.associate = function(models) {
     models.categories.hasMany(models.attributes);
   }; 
   assets.associate = function(models) {
     models.assets.hasMany(models.asset_to_notes);
   };
  */

  return assets;
};
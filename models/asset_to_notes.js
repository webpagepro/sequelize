'use strict';
module.exports = (sequelize, DataTypes) => {
  const Asset_to_notes = sequelize.define('Asset_to_notes', {
    asset_to_note_id: DataTypes.INTEGER,
    asset_id: DataTypes.INTEGER,
    note_id: DataTypes.INTEGER,
    notes: DataTypes.STRING

  }, {});
  Asset_to_notes.associate = function(models) {
    // associations can be defined here
  };
  return Asset_to_notes;
};
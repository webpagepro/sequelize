module.exports = (app, db) => {

    app.get( "/assets", (req, res) => {
        db.assets.sequelize.query(`SELECT a.asset_id, a.category_id, attr.attribute_name, ata.attribute_value, ata.attribute_id 
        FROM assets a 
        JOIN asset_to_attributes ata 
        ON ata.asset_id = a.asset_id 
        JOIN attributes attr 
        ON ata.attribute_id = attr.attribute_id 
        WHERE a.category_id = a.asset_id`)
       .then((results => res.json(results) )
      );
       }) 




    }
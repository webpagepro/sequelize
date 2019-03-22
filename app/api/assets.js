//require('../../models/index')

module.exports = (app, db) => {
    /* app.get( "/assets", (req, res) =>
       db.assets.findAll().then( (result) => res.json(result) )
     );
   */
    // GET ALL ASSETS *WORKS
    app.get("/assets", (req, res) => {
        db.assets.sequelize.query(`SELECT a.asset_id, a.category_id, attr.attribute_name, ata.attribute_value, ata.attribute_id 
    FROM assets a 
    JOIN asset_to_attributes ata 
    ON ata.asset_id = a.asset_id 
    JOIN attributes attr 
    ON ata.attribute_id = attr.attribute_id 
    WHERE ata.asset_id = a.asset_id
    ORDER BY a.asset_id ASC`)
            .then((result => res.json(result))
            );
    })


    //GET ASSET & ATTTRIBUTES BY CATEGORY ID *WORKS
    app.get("/assets/:category_id", (req, res) => {
        db.assets.sequelize.query(`SELECT a.asset_id, a.category_id, attr.attribute_name, ata.attribute_value, 
      ata.attribute_id 
      FROM assets a 
      JOIN asset_to_attributes ata 
      ON ata.asset_id = a.asset_id
      JOIN attributes attr 
      ON ata.attribute_id = attr.attribute_id 
      WHERE a.category_id = ${req.params.category_id}
      ORDER BY a.asset_id ASC`)
            .then(result =>
                res.json(result))
    });

    // CREATE NEW ASSET_ID & CATEGORY_ID *WORKS
    app.post("/assets/:asset_id/:category_id", (req, res) => {
        db.assets.create({
            asset_id: req.params.asset_id,
            category_id: req.params.category_id
        }).then((result => res.json(result))
        )
    })

    // EDIT ASSET
    app.put("/assets/:id", (req, res) =>
        db.assets.update({
            asset_id: req.params.id,
            category_id: req.body.category_id
        },
            {
                where: {
                    asset_id: req.params.asset_id
                }
            }).then((result) => res.json(result))
    );

    // DELETE FROM ASSETS *WORKS
    app.delete("/assets/:id", (req, res) =>
        db.assets.destroy({
            where: {
                asset_id: req.params.id
            }
        }).then((result) => res.json(result))
    );



}
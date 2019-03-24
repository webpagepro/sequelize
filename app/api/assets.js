//require('../../models/index')

module.exports = (app, db) => {
  //FIND ALL ASSETS *WORKS
    app.get( "/assets", (req, res) =>
       db.assets.findAll({
        assets:[
                'assets'
       ]
               
        })
       .then(result => {
            res.json(result)
       })
     );

/**********************************
     app.get( "/assets", (req, res) =>
     db.assets.findAll({
      assets:['assets']['attributes_name']
             
      })
     .then(result => {
          res.json(result)
     })
   );

*/

// ASSET & ATTRIBUTES BY ID
app.get("/assets/:id", (req, res) => {
    (
        db.asset_to_attributes.findAll({
            where:
                [{ asset_id: req.params.id }]

        })
            .then(results => res.json(results))
    );
})


    //GET ALL ASSETS & ATTTRIBUTES BY CATEGORY ID *WORKS
    app.get("/assets/category/:category_id", (req, res) => {
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

    // EDIT ASSET CATEGORY
    app.put("/assets/edit/category/:id", (req, res) =>
        db.assets.update({
            asset_id: req.params.id,
            category_id: req.body.category_id
        },
            {
                where: {
                    asset_id: req.params.id
                }
            }).then((result) => res.json(result))
    );



    // EDIT ASSET ATTRIBUTES - requires value (url) and ata id (body) *WORKS
    app.put("/assets/edit/:id", (req, res) =>
    db.asset_to_attributes.update({
        attribute_value: req.body.attribute_value
        },
            {
                where: {
                    asset_id: req.params.id,
                    asset_to_attributes_id: req.body.asset_to_attribute_id 
                }
            }).then((result) => res.json(result))
            .catch(function(err) {
                // print the error details
                console.log(err, request.body.attribute_value);
            })
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
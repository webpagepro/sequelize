module.exports = (app, db) => {
    /*  GET ASSET ATTRIBUTES  */
    app.get("/assets", (req, res) => {

        db.assets.findAll({

            order: [['asset_id']]

        })
            .then(result => {
                res.json(result)
            })
    })

    /* 
        .then(result => {
             res.json(result)
         })
        })
       
    db.sequelize.query(`SELECT a.asset_id, a.qrcode, ata.attribute_value, attr.attribute_name, atn.notes FROM assets a JOIN asset_to_attributes ata ON a.asset_id = ata.asset_id JOIN attributes attr ON attr.attribute_id = ata.attribute_id JOIN asset_to_notes atn ON atn.asset_id = a.asset_id
    ORDER BY a.asset_id`, {type: db.sequelize.QueryTypes.SELECT})
    
    .then(result => {
      res.json(result)
    })})
      
     where: [{
        asset_id: ['asset_to_attributes']}]
     
    }).then(
        results => {
            res.json(results)
        })
       })
    */

    /*  GET ASSET ATTRIBUTES  */
    app.get("/assets/attributes", (req, res) => {
        db.asset_to_attributes.findAll({
            order: [['asset_id']]
        })
            .then(result => {
                res.json(result)
            })

    })

    // ASSET & ATTRIBUTES BY ID
    app.get("/assets/:id", (req, res) => {

        db.assets.findOne({


            where:
                [{ asset_id: req.params.id }]

        })
            .then(results => res.json(results))

    })


    //GET ASSETS - ATTTRIBUTES & NOTES BY CATEGORY ID *WORKS
 /*    app.get("/assets/attributes/category/:category_id", (req, res) => {
        db.asset_to_attributes.sequelize.query(`SELECT a.asset_id, a.category_id, ata.attribute_id, attr.attribute_name, ata.attribute_value, atn.notes
            FROM assets a
            JOIN category_to_attributes cta
            ON cta.category_id = a.category_id
            JOIN asset_to_attributes ata
            ON ata.asset_id = a.asset_id
            JOIN attributes attr
            ON attr.attribute_id = ata.attribute_id
            JOIN asset_to_notes atn
            ON atn.asset_id = ata.asset_id
           
            WHERE a.category_id =  ${req.params.category_id}
            ORDER BY a.asset_id, ata.attribute_id, attr.attribute_name, ata.attribute_value, a.category_id, atn.notes`, { type: db.asset_to_attributes.sequelize.QueryTypes.SELECT })
            .then(result =>
                res.json(result))
        });
    })
    */

    //GET  ASSET ATTTRIBUTES BY CATEGORY ID *WORKS
    app.get("/assets/category/:id", (req, res) => {
        db.assets.findAll({
            attribute_values: [
                'attribute_values'
            ],

            where: {
                asset_id: req.params.id
            }
        }).then((result) => res.json(result))

    })

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

    /*UPDATE ASSET ATTRIBUTES - requires value (url) and ata id (body) *WORKS
    app.put("/assets/edit/:id", (req, res) =>
        db.asset_to_attributes.update({
            attribute_value: req.body.attribute_value
        },
            {
                where: {
                    asset_id: req.params.id,
                    attribute_id: req.body.attribute_id

                }
            }).then((result) => res.json(result))
            .catch(function (err) {
                // print the error details
                console.log(err, request.body.attribute_value);
            })
    );
*/


    // EDIT ASSET 
    app.put("/assets/edit/:id", (req, res) =>
        db.assets.update({
            asset_id: req.params.id,
            notes: req.body.notes,
            qrcode: req.body.qrcode
        },
            {
                where: {
                    asset_id: req.params.id
                }
            }).then((result) => res.json(result))
    );

    /*
    
        // UPDATE ASSET ATTRIBUTES - requires value (url) and ata id (body) *WORKS
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
    
    */

    // DELETE FROM ASSETS *WORKS
    app.delete("/assets/:id", (req, res) =>
        db.assets.destroy({
            where: {
                asset_id: req.params.id
            }
        }).then((result) => res.json(result))
    );


    app.post("/lookup", (req, res) => {
        db.sequelize.query(`INSERT INTO assets(asset_id) VALUES((SELECT MAX(asset_id) + 1 FROM assets a))`,
        { type: db.assets.sequelize.QueryTypes.INSERT })
       

            .then(result => {
                res.json(result)
            })
    })

    app.get("/lookup", (req, res) => {
        db.sequelize.query(`SELECT MAX(asset_id) AS max_id FROM assets`,  { type: db.assets.sequelize.QueryTypes.SELECT })
        .then(result => {
            res.json(result)
        })
    })

}
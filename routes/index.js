const assetsController = require('../controllers/assets');
//const categoriesController = require('../controllers/categories');

module.exports = (app) => {
    app.get('/assets/:asset_id', (req, res) => res.status(200).send(
        req.params
    ));

 //app.get('/assets/:asset_id&category_id', assetsController.create);
   // app.post('/assets/:asset_id', assetsController.create);

 /*
   get('/', index.lookup);
   get('/assets', assets.getAll);
   get('/assets/:id', assets.getOne);
   post('/assets', assets.assetAdd);
   patch('/assets/:id', assets.assetEdit);
   get('/categories/:id', categories.getCategories);
   post('/categories', categories.categoryAdd);
   patch('/categories/:id', categories.categoryEdit);

*/

};//require('../../models/index')

module.exports = (app, db) => {
   /* app.get( "/assets", (req, res) =>
      db.assets.findAll().then( (result) => res.json(result) )
    );
  */
 //Works - Get All
    app.get( "/assets", (req, res) => {
    db.assets.sequelize.query(`SELECT a.asset_id, a.category_id, attr.attribute_name, ata.attribute_value, ata.attribute_id 
    FROM assets a 
    JOIN asset_to_attributes ata 
    ON ata.asset_id = a.asset_id 
    JOIN attributes attr 
    ON ata.attribute_id = attr.attribute_id 
    WHERE ata.asset_id = a.asset_id`)
   .then((results => res.json(results) )
  );
   }) 

   app.get( "/asset/:id/", (req, res) => 
     db.assets.findById(req.params.id).then(result => res.json(result))
     )
   

    app.get( "/assets/:id", (req, res) => {
      db.assets.sequelize.query(`SELECT a.asset_id, a.category_id, attr.attribute_name, ata.attribute_value, 
      ata.attribute_id 
      FROM assets a 
      JOIN asset_to_attributes ata 
      ON ata.asset_id = ${req.params.id}
      JOIN attributes attr 
      ON ata.attribute_id = attr.attribute_id 
      WHERE ata.category_id = a.category_id`)
    .then(result => 
        res.json(result))
}); 
  
//Works - Add
    app.post("/assets/:asset_id/:category_id", (req, res) => {
      db.assets.create({
        asset_id: req.params.asset_id,
        category_id: req.params.category_id
      }).then( (result => res.json(result)) 
    )})
  
    app.put( "/assets/:asset_id", (req, res) =>
      db.assets.update({
        asset_id: req.body.asset_to_attributes,
        category_id: req.body.category_id
      },
      {
        where: {
          id: req.params.asset_id
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/assets/:asset_id", (req, res) =>
      db.assets.destroy({
        where: {
          asset_id: req.params.asset_id
        }
      }).then( (result) => res.json(result) )
    );



  }
module.exports = (app, db) => {
    app.get( "/categories/:id", (req, res) =>
      db.categories.findById(req.params.id).then( (result) => res.json(result))
    );

    app.get( "/categories", (req, res) =>
    db.categories.findAll().then( (result) => res.json(result) )
  );


  }
  
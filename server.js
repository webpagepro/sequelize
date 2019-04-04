const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");
const cors = require('cors');
const db = require("./models");
const apiAssets = require("./app/api/assets");
const apiCategories = require("./app/api/categories");
const apiAttributes = require("./app/api/attributes");
const apiAssetToAttributes = require("./app/api/asset_to_attributes");
const apiCategoryToAttributes = require("./app/api/category_to_attributes");
const apiAssetToNotes = require("./app/api/asset_to_notes");

const app = express();
app.use(bodyParser.json());
app.use(cors())
/*
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/
//app.use(express.static("app/public"));

apiAssets(app, db);
apiCategories(app, db);
apiAttributes(app, db);
apiAssetToAttributes(app, db);
apiCategoryToAttributes(app, db);
apiAssetToNotes(app, db);
/*
db.assets.belongsTo(db.categories);
db.attributes.belongsTo(db.categories);
db.assets.hasMany(db.attributes);
db.assets.hasMany(db.asset_to_notes);
db.attribues.belongsTo(db.asset_to_attributes);
db.categories.belongsTo(db.category_to_attributes);
*/
/*
db.sequelize.sync().then(() => {
  // populate categories table with dummy data
  db.categories.bulkCreate(
    times(10, () => ({
      category_id: faker.name.category_id(),
      category_name: faker.name.category_name()
    }))
  );
  // populate assets table with dummy data
  db.assets.bulkCreate(
    times(10, () => ({
      asset_id: faker.lorem.sentence(),
      category_id: faker.lorem.paragraph()
    }))
  );
  */
  app.listen(8080, () => console.log("App listening on port 8080!"));
//});
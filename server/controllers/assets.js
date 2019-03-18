const Assets = require('../../models').Assets
module.exports = {
    create(req, res){
return Assets
.create({
    asset_id: req.body.asset_id,
    category_id: req.body.category_id

})
    .then(asset => res.status(201).send(asset))
    console.log("assets controller", asset)
    .catch(error => res.status(400).send(error));
    },
};
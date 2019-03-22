const q = "SELECT category_id FROM assets WHERE asset_id = $id_lookup";
const Assets = require('../models/index').Assets
module.exports = async() => ({
    create(req, res){
return 
    Assets.findOneOrCreate({ 
        where: {
            asset_id: req.params.asset_id,
            category_id: 99  
        }
    })

    .then(asset => res.status(201).send(asset))
    console.log("assets controller", asset)
    .catch(error => res.status(400).send(error));
    },
});
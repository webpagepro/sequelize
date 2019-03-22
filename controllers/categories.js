const Categories = require('../models/categories')
module.exports = {
    create(req, res){
return Categories
.create({
    category_id: req.body.category_id,
    category_name: req.body.category_name
    

})
    .then(category => res.status(201).send(category))
    console.log("assets controller", category)
    .catch(error => res.status(400).send(error));
    },
};
const assetsController = require('../controllers').assets;

module.exports = (app) => {
    app.get('/', (req, res) => res.status(200).send({
        message: 'Welcome to Asset Manager API', 
    }));

    app.post('/api/assets/:id', assetsController.create);

};
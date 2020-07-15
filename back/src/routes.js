const express = require('express');

const multer = require('./multer');

const routes = express.Router();

const MulterController = require('./Controller/MulterController');

routes.get('/', (req,res,next)=>{
    return res.send('ol')
});
routes.get('/nova-imagem', MulterController.index);
routes.post('/nova-imagem', multer.any('image'), MulterController.create);

module.exports = routes;
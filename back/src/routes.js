const express = require('express');

const multer = require('./multer');



const routes = express.Router();

const Teste = require('./Controller/controller')
const MulterController = require('./Controller/MulterController');

routes.get('/', (req,res,next)=>{
    return res.send('ol')
});
routes.get('/nova-imagem', MulterController.index);
routes.post('/nova-imagem', multer.single('image'), MulterController.create);

module.exports = routes;
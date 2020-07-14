var express = require('express');
var app = express();
var routes = require('./routes')
var multer = require('multer')
var cors = require('cors');

app.use(cors())


app.use(express.json());
app.use(routes);

app.listen(3333);
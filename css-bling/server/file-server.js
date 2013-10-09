var express = require('express');
var app = express();

app.use('/',express.static('/home/mint/dev/github/css-bling/static/'));

app.listen(8080);
var express = require('express');
var app = express();

app.use('/', express.static('./public')).listen(8080);
console.log("client is listening to port 8080..");
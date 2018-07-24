var http = require('http');
var express = require('express');

console.log("Ejecutando");

/**
 * Servidor web
 */
var app = express();
app.listen(8080);
app.use(express.static('../www'));

app.get('*',function(req, res){
    console.log("Resto");
    res.json({resp:"off"});
});
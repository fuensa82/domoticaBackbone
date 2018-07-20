var http = require('http');
var express = require('express');

console.log("Ejecutando");

/**
 * Servidor web
 */
var app = express();
app.listen(8080);
app.use(express.static('../www'));
/*
app.get('/ponToldo',function(req, res){
    console.log("ponToldo");
    portArduino.write('ponToldo\n', function(err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    res.json({resp:"Enviada orden de puesta"});
});
app.get('/quitaToldo',function(req, res){
    console.log("quitaToldo");
    portArduino.write('quitaToldo\n', function(err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    res.json({resp:"Enviada orden de quitado"});
 
});

app.get('/paraToldo',function(req, res){
    console.log("paraToldo");
    portArduino.write('paraToldo\n', function(err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    res.json({resp:"Enviada orden de parar Toldo"});
 
});*/

/*app.get('*',function(req, res){
    console.log("Resto");
    res.json({resp:"Orden no reconocida"});
});*/
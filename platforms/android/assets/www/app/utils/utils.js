define([
	'jquery',
    'underscore',
    'backbone'
	], function ($, _, Backbone) {	
	var utils = {
        url:"",
        urlWan:"http://micasa82.ddns.net:4321",
        urlLocal:"http://192.168.1.10:4321",
        cargaTemplate:function(template){
            var promesa=new $.Deferred();
            require(["text!templates/"+template+".tpl"], 
                function(templa){
                    promesa.resolve(_.template(templa));
                });
            return promesa;
        },
        initialize:function(){
            this.cargarUrlCorrecta();
        },
        cargarUrlCorrecta:function(){
            var aqui=this;
            var wifi=window.cordova.plugins.WifiManager;
            wifi.getConnectionInfo(function(err,wifiinfo){
                if(wifiinfo.SSID=="Casa1"){
                    aqui.url=aqui.urlLocal;
                }else{
                    aqui.url=aqui.urlWan;
                }
            });
        },
        ajax:function(accion){
            var prom=$.ajax({
                type:"GET",
                dataType:"JSON",
                url:this.url+"/"+accion,
                crossDomain:true
            });
            return prom;
        }
        
    }
    return utils;
});
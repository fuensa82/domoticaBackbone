define([
	'jquery',
    'underscore',
    'backbone'
	], function ($, _, Backbone) {	
	var utils = {
        url:"http://micasa82.ddns.net:4321",
        urlLocal:"http://192.168.1.10:4321",
        cargaTemplate:function(template){
            var promesa=new $.Deferred();
            require(["text!templates/"+template+".tpl"], 
                function(templa){
                    promesa.resolve(_.template(templa));
                });
            return promesa;
        }
    }
    return utils;
});
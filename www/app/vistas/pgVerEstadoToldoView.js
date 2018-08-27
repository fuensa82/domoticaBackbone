define([
	'jquery',
    'underscore',
    'backbone',
    '../utils/utils'
	], function ($, _, Backbone, Utils) {	
	var verEstadoToldoView = Backbone.View.extend({
        nameTemplate:"tplVerEstadoToldo",
        template: function(){
            return Utils.cargaTemplate(this.nameTemplate);
        },
        render:function (eventName) {
            //WifiWizard.getCurrentSSID(alert(a), fail);
            var promesa=new $.Deferred();
            var obj=this.el;
            this.template().done(function(templa){
                $(obj).html(templa);
                promesa.resolve(this);
            });
            return promesa
        },            
        acciones:function(){
            this.ponEstadoToldo();
            this.nombreWiFi();
            /*$("#btnBackVerEstadoToldo").click(function(){
                //alert("Volviendo");
                Backbone.history.navigate("pageToldo", { trigger: true });
                //Backbone.history.back();
            });*/
        },
        ponEstadoToldo:function(){
            var idSpan="#estadoToldo2";
            Utils.ajax("estadoToldo").done(function(data){
                $(idSpan).html(data.resp);
                if(data.resp=='on'){
                    $(idSpan).css("background-color","#58FA82");
                    $(idSpan).css("color","white");
                }else if(data.resp=='half'){
                    $(idSpan).css("background-color","#FAAC58");
                    $(idSpan).css("color","white");
                }else{
                    $(idSpan).css("background-color","#F5A9BC");
                    $(idSpan).css("color","white");
                }
            });
            
        },
        nombreWiFi:function(){
            var wifi=window.cordova.plugins.WifiManager;
            wifi.getConnectionInfo(function(err,wifiinfo){
                $("#WifiName").html(wifiinfo.SSID);
            });
        },
        getUltimoEstado:function(){
            var idSpan=ultimoEstado;
            Utils.ajax("hora").done(function(data){
                $(idSpan).html(data.resp);
            });
        }
    });
    return verEstadoToldoView;
});
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
            this.getUltimoEstado();
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
            //alert("nombreWiFi");
            var wifi=window.cordova.plugins.WifiManager;
            //alert("nombreWiFi 2");
            wifi.getConnectionInfo(function(err,wifiinfo){
                //alert("nombreWiFi 3");
                $("#WifiName").html(wifiinfo.SSID);
                //alert("nombreWiFi 4");
            });
            //alert("nombreWiFi 5");
            window.getConnectedSSID().then(function(a){
                alert(a);
            })
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
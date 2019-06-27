define([
	'jquery',
    'underscore',
    'backbone',
    '../utils/utils'
	], function ($, _, Backbone, Utils) {	
	var muestraRiegoView = Backbone.View.extend({ 
        nameTemplate:"tplRiego",
        template: function(){
            return Utils.cargaTemplate(this.nameTemplate);
        },
        render:function (eventName) {
            var promesa=new $.Deferred();
            var obj=this.el;
            this.template().done(function(templa){
                $(obj).html(templa);
                promesa.resolve(this);
            });
            return promesa
        },
        ponEstadoToldo:function(){
            $.ajax({
                type:"GET",
                dataType:"JSON",
                url:Utils.url+"/estadoToldo",
                crossDomain:true
            }).done(function(data){
                $("#estadoToldo").html(data.resp);
                if(data.resp=='on'){
                    $("#estadoToldo").css("background-color","#58FA82");
                    $("#estadoToldo").css("color","white");
                }else if(data.resp=='half'){
                    $("#estadoToldo").css("background-color","#FAAC58");
                    $("#estadoToldo").css("color","white");
                }else{
                    $("#estadoToldo").css("background-color","#F5A9BC");
                    $("#estadoToldo").css("color","white");
                }
            });
            
        },
        acciones:function(){
            var aqui=this;
            aqui.ponEstadoToldo();
            $("#btnPonToldo").click(function(){
                $.ajax({
                    type:"GET",
                    dataType:"JSON",
                    url:Utils.url+"/ponToldo",
                    crossDomain:true
                }).done(function(data){
                    aqui.ponEstadoToldo();
                    alert(data.resp);
                });
            });
            $("#btnQuitarToldo").click(function(){
                $.ajax({
                    type:"GET",
                    dataType:"JSON",
                    url:Utils.url+"/quitaToldo",
                    crossDomain:true
                }).done(function(data){
                    aqui.ponEstadoToldo();
                    alert(data.resp);
                });
            });
            $("#btnParaToldo").click(function(){
                $.ajax({
                    type:"GET",
                    dataType:"JSON",
                    url:Utils.url+"/paraToldo",
                    crossDomain:true
                }).done(function(data){
                    aqui.ponEstadoToldo();
                    alert(data.resp);
                });
            });
            $("#btnVerEstadoToldo").click(function(){
                Backbone.history.navigate("verEstadoToldo", { trigger: true });
                return false;
            });
        }
    });
    return muestraRiegoView;
});
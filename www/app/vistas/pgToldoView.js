define([
	'jquery',
    'underscore',
    'backbone'
	], function ($, _, Backbone) {	
	var muestraToldoView = Backbone.View.extend({
            template: function(){
                var promesa=new $.Deferred();
                require(["lib/text!app/vistas/pgToldo/tplToldo.tpl"], 
                    function(templa){
                        promesa.resolve(_.template(templa));
                    });
                return promesa
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
                    url:"http://micasa82.ddns.net:4321/estadoToldo",
                    //url:"http://192.168.10.138:4321/estadoToldo",
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
                        url:"http://micasa82.ddns.net:4321/ponToldo",
                        //url:"http://192.168.10.138:4321/ponToldo",
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
                        url:"http://micasa82.ddns.net:4321/quitaToldo",
                        //url:"http://192.168.10.138:4321/quitaToldo",
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
                        url:"http://micasa82.ddns.net:4321/paraToldo",
                        //url:"http://192.168.10.138:4321/paraToldo",
                        crossDomain:true
                    }).done(function(data){
                        aqui.ponEstadoToldo();
                        alert(data.resp);
                    });
                });
            }
        });
    return muestraToldoView;
});
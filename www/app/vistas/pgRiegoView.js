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
        ponEstadoRiego:function(){
            $.ajax({
                type:"GET",
                dataType:"JSON",
                url:Utils.url+"/estado",
                crossDomain:true
            }).done(function(data){
                $("#estadoRiego").html(data.resp2);
                if(data.resp2=='on'){
                    $("#estadoRiego").css("background-color","#58FA82");
                    $("#estadoRiego").css("color","white");
                }else{
                    $("#estadoRiego").css("background-color","#F5A9BC");
                    $("#estadoRiego").css("color","white");
                }
            });
            
        },
        ponHorasRiego:function(){
            $.ajax({
                type:"GET",
                dataType:"JSON",
                url:Utils.url+"/horasRiego",
                crossDomain:true
            }).done(function(data){
                $("#horaRiegoCompleto").html(data.ultimaHoraRiegoCompleto);
                $("#horaRiego").html(data.ultimaHoraRiego);
            });
            
        },
        ponHumedad:function(){
            $.ajax({
                type:"GET",
                dataType:"JSON",
                url:Utils.url+"/humedad",
                crossDomain:true
            }).done(function(data){
                $("#humedad").html(data.humedad);
            });
            
        },
        acciones:function(){
            var aqui=this;
            this.ponEstadoRiego();
            this.ponHorasRiego();
            this.ponHumedad();
            $("#btnRegar").click(function(){
                $.ajax({
                    type:"GET", 
                    dataType:"JSON",
                    url:Utils.url+"/riega",
                    crossDomain:true
                }).done(function(data){
                    alert(data.resp);
                    aqui.ponEstadoRiego();
                });
            });
            $("#btnPararRiego").click(function(){
                $.ajax({
                    type:"GET",
                    dataType:"JSON",
                    url:Utils.url+"/paraRiego",
                    crossDomain:true
                }).done(function(data){
                    alert(data.resp);
                    aqui.ponEstadoRiego();
                });
            });
        }
    });
    return muestraRiegoView;
});
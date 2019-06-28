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
                $("#estadoRiego").html(data.resp);
                if(data.resp2=='on'){
                    $("#estadoRiego").css("background-color","#58FA82");
                    $("#estadoRiego").css("color","white");
                }else{
                    $("#estadoRiego").css("background-color","#F5A9BC");
                    $("#estadoRiego").css("color","white");
                }
            });
            
        },
        acciones:function(){
            var aqui=this;
            $("#btnRegar").click(function(){
                $.ajax({
                    type:"GET",
                    dataType:"JSON",
                    url:Utils.url+"/riega",
                    crossDomain:true
                }).done(function(data){
                    alert(data.resp);
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
                });
            });
        }
    });
    return muestraRiegoView;
});
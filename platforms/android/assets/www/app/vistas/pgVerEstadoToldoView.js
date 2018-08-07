define([
	'jquery',
    'underscore',
    'backbone'
	], function ($, _, Backbone) {	
	var verEstadoToldoView = Backbone.View.extend({
        nameTemplate:"tplVerEstadoToldo",
            template: function(){
                var promesa=new $.Deferred();
                require(["text!templates/"+this.nameTemplate+".tpl"], 
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
            acciones:function(){
                var aqui=this;
                /*$("#btnBackVerEstadoToldo").click(function(){
                    //alert("Volviendo");
                    Backbone.history.navigate("pageToldo", { trigger: true });
                    //Backbone.history.back();
                });*/
            }
        });
    return verEstadoToldoView;
});
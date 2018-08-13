define([
	'jquery',
    'underscore',
    'backbone',
    '../utils/utils'
	], function ($, _, Backbone, Utils) {	
	var muestraToldoView = Backbone.View.extend({
        nameTemplate:"tplHome",
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
        acciones: function(){
            $("#btnPageToldo").click(function(){
                Backbone.history.navigate("pageToldo", true);
                return false;
            });
            /*$.mobile.ajaxEnabled = false;
            $.mobile.linkBindingEnabled = false;
            $.mobile.hashListeningEnabled = false;
            $.mobile.pushStateEnabled = false;*/
        }
    });
    return muestraToldoView;
});
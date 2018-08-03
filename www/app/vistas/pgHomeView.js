define([
	'jquery',
    'underscore',
    'backbone'
	], function ($, _, Backbone) {	
	var muestraToldoView = Backbone.View.extend({
        template: function(){
            var promesa=new $.Deferred();
            require(["../lib/text!templates/tplHome.tpl"], 
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
        }
    });
    return muestraToldoView;
});
window.muestraToldoView = Backbone.View.extend({
    
    template:"tplToldo",

    render:function (eventName) {
        require(["lib/text!app/vistas/pgToldo/tplToldo.tpl"], 
            function(template){
                $(this.el).html(template);
                //return template;
            });
        
        return this;
    }
});
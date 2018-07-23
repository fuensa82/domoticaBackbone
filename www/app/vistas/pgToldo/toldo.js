window.muestraToldoView = Backbone.View.extend({
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
    acciones:function(){
        $("#btnPonToldo").click(function(){
            /*$.get("http://micasa82.ddns.net:4321",function(data, status){
                alert("Data: " + data + "\nStatus: " + status);
            })*/
            $.ajax({
                type:"GET",
                dataType:"JSON",
                url:"http://micasa82.ddns.net:4321",
                crossDomain:true
            }).done(function(data){
                alert("Data: " + data);
            });
        })
    }
});
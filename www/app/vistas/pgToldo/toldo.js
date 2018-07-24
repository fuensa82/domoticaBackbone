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
    ponEstadoToldo:function(){
        $.ajax({
            type:"GET",
            dataType:"JSON",
            //url:"http://micasa82.ddns.net:4321/ponToldo",
            url:"http://localhost:8080",
            crossDomain:true
        }).done(function(data){
            if(data.resp=='on'){
                $("#estadoToldo").html("on");
                $("#estadoToldo").css("background-color","#58FA82");
                $("#estadoToldo").css("color","white");
            }else{
                $("#estadoToldo").html("&nbsp;off&nbsp;");
                $("#estadoToldo").css("background-color","#F5A9BC");
                $("#estadoToldo").css("color","white");
            }
        });
        
    },
    acciones:function(){
        this.ponEstadoToldo();
        $("#btnPonToldo").click(function(){
            $.ajax({
                type:"GET",
                dataType:"JSON",
                url:"http://micasa82.ddns.net:4321/ponToldo",
                //url:"http://localhost:8080",
                crossDomain:true
            }).done(function(data){
                alert(data.resp);
            });
        });
        $("#btnQuitarToldo").click(function(){
            $.ajax({
                type:"GET",
                dataType:"JSON",
                url:"http://micasa82.ddns.net:4321/quitaToldo",
                //url:"http://localhost:8080",
                crossDomain:true
            }).done(function(data){
                alert(data.resp);
            });
        });
        $("#btnParaToldo").click(function(){
            $.ajax({
                type:"GET",
                dataType:"JSON",
                url:"http://micasa82.ddns.net:4321/paraToldo",
                //url:"http://localhost:8080",
                crossDomain:true
            }).done(function(data){
                alert(data.resp);
            });
        });
    }
});
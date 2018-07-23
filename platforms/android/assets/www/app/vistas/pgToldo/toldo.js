window.muestraToldoView = Backbone.View.extend({
    template:_.template($('#tplToldo').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
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
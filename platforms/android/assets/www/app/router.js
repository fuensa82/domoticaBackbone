define([
	'jquery',
	'underscore',
    'backbone',
    'jquerymobile',
    'vistas/pgHomeView',
    'vistas/pgToldoView',
    'vistas/pgVerEstadoToldoView'
	], function ($, _, Backbone, mobile, pgHomeView,pgToldoView,pgVerEstadoToldoView) {
    // rutas de la aplicación
    var AppRouter = Backbone.Router.extend({
        routes:{
            "":"home",
            "home":"home",
            "page1":"page1",
            "page2":"page2",
            "pageToldo":"fnPageToldo",
            "verEstadoToldo":"fnVerEstadoToldo"
        },
    
        initialize:function () {
            // Handle back button throughout the application
            $('.back').live('click', function(event) {
                window.history.back();
                return false;
            });
            this.firstPage = true;
        },
    
        home:function () {
            console.log('#home');
            this.changePage2(new pgHomeView());
        },
        fnPageToldo:function () {
            console.log('#pageToldo');
            this.changePage2(new pgToldoView());
        },
        fnVerEstadoToldo: function(){
            this.changePage2(new pgVerEstadoToldoView());
        },
        changePage:function (page) {
            $(page.el).attr('data-role', 'page');
            page.render();
            $('body').append($(page.el));
            if(page.acciones!=null){
                page.acciones();
            }
            var transition = $.mobile.defaultPageTransition;
            transition = 'none';
            // We don't want to slide the first page
            if (this.firstPage) {
                transition = 'none';
                this.firstPage = false;
            }
            $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
        },
        changePage2:function (page) {
            //borramos la paginas para volver a crearlas y asi volver a programar las acciones.
            $(".ui-page").not(".ui-page-active").remove();
            $(page.el).attr('data-role','page');
            page.render().done(function(){
                $('body').append($(page.el));
                if(page.acciones!=null){
                    page.acciones();
                }
                var transition = $.mobile.defaultPageTransition;
                // We don't want to slide the first page
                if (this.firstPage) {
                    transition = 'none';
                    this.firstPage = false;
                }
                $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
            });
        }
    });
	return AppRouter;
});
define([
	'jquery',
	'underscore',
    'backbone',
    'jquerymobile',
    'vistas/pgHomeView',
    'vistas/pgToldoView',
    'vistas/pgVerEstadoToldoView',
    'utils/utils'
	], function ($, _, Backbone, mobile, pgHomeView,pgToldoView,pgVerEstadoToldoView, Utils) {
    // rutas de la aplicación
    var AppRouter = Backbone.Router.extend({
        back:false,
        routes:{
            "":"home",
            "home":"home",
            "pageRegar":"fnPageRegar",
            "page2":"page2",
            "pageToldo":"fnPageToldo",
            "verEstadoToldo":"fnVerEstadoToldo"
        },
    
        initialize:function () {
            $('.back').live('click', function(event) {
                window.history.back();
                this.back=true;
                return false;
            });
            $.mobile.ajaxEnabled = false;
            $.mobile.linkBindingEnabled = false;
            $.mobile.hashListeningEnabled = false;
            $.mobile.pushStateEnabled = false;
            this.firstPage = true;
            Utils.initialize();
        },
    
        home:function () {
            console.log('#home');
            this.changePage2(new pgHomeView());
        },
        fnPageToldo:function () {
            console.log('#pageToldo');
            this.changePage2(new pgToldoView());
        },
        fnPageRegar:function(){
            this.changePage2(new pgRiegoView());
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
            $(page.el).attr('data-role','page');
            page.render().done(function(){
                $('body').append($(page.el));
                if(page.acciones!=null){
                    page.acciones();
                }
                var transition = $.mobile.defaultPageTransition;
                transition="slide";
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
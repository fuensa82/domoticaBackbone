define([
	'jquery',
	'underscore',
    'backbone',
    'jquerymobile',
    'vistas/pgHomeView',
    'vistas/pgToldoView',
	], function ($, _, Backbone, mobile, pgHomeView,pgToldoView) {
    // rutas de la aplicación
    var AppRouter = Backbone.Router.extend({
        routes:{
            "":"home",
            "page1":"page1",
            "page2":"page2",
            "pageToldo":"muestraToldo"
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
        muestraToldo:function () {
            console.log('#muestraToldo');
            this.changePage2(new pgToldoView());
        },
        changePage:function (page) {
            $(page.el).attr('data-role', 'page');
            page.render();
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
        },
        changePage2:function (page) {
            $(page.el).attr('data-role', 'page');
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
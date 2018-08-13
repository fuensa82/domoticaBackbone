require.config({
    paths: {
        jquery: '../lib/jquery-1.7.1',
        underscore: '../lib/underscore',
        backbone: '../lib/backbone',
        jquerymobile:'../lib/jquery.mobile-1.0.1.min',
        confMobile: 'jqm-config',
        text:'../lib/text',
        router:'router'
    }
});
require([
    'router','jquery'
    ], function (Router,$) {
        //$(document).bind("mobileinit", function () {
            // Remove page from DOM when it's being replaced
            $('div[data-role="page"]').live('pagehide', function (event, ui) {
                console.log("borrando ... ");
                $(event.currentTarget).remove();
            });
        //});
        console.log("Entrando");
        window.app = new Router();
        Backbone.history.start(); 
    }
);
require.config({
    paths: {
        jquery: '../lib/jquery-1.7.1.min',
        underscore: '../lib/underscore',
        backbone: '../lib/backbone',
        jquerymobile:'../lib/jquery.mobile-1.0.1.min',
        confMobile: 'jqm-config',
        text:'text',
        router:'router'
    }
    /*shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
        
    }*/
});
require([
    'router'
    ], function (Router) {
        console.log("Entrando");
        window.app = new Router();
        Backbone.history.start(); 
    }
);
/// <reference path="_all.ts" />
var App;
(function (App) {
    'use strict';
    angular.module('policyApp', ['controllers', 'ngRoute', 'ui.router']).config(['$stateProvider', function ($stateProvider) {
        App.Configs.RouteConfig.config($stateProvider);
    }]);
})(App || (App = {}));
//# sourceMappingURL=app.js.map
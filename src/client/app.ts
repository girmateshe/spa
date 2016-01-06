/// <reference path="_all.ts" />

module App {
    'use strict';

    angular.module('policyApp', ['controllers', 'ngRoute', 'ui.router'])
        .config(['$stateProvider', ($stateProvider) => {
                App.Configs.RouteConfig.config($stateProvider);
            }]
        );
}

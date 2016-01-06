// /// <reference path='../_all.ts' />
var App;
(function (App) {
    var Configs;
    (function (Configs) {
        'use strict';
        /**
         * The RouteConfig defines the application routes, $routeProvider
         * will also be injected into the route config and will be used to
         * access the parameters.
         */
        var RouteConfig = (function () {
            function RouteConfig() {
            }
            RouteConfig.config = function ($stateProvider) {
                $stateProvider.state('policies', {
                    url: '/policies',
                    controller: App.Controllers.PoliciesController,
                    templateUrl: "src/client/views/policies/list.html"
                }).state('newPolicy', {
                    url: '/policies/new',
                    templateUrl: 'src/client/views/policies/add.html',
                    controller: App.Controllers.PoliciesController,
                }).state("viewPolicy", {
                    url: '/policies/:id',
                    controller: App.Controllers.PoliciesController,
                    templateUrl: "src/client/views/policies/view.html"
                }).state('editPolicy', {
                    url: '/policies/:id/edit',
                    templateUrl: 'src/client/views/policies/edit.html',
                    controller: App.Controllers.PoliciesController
                }).state('pets', {
                    url: '/policies/:policyId/pets',
                    controller: App.Controllers.PetsController,
                    templateUrl: "src/client/views/pets/list.html"
                }).state('addPetToPolicy', {
                    url: '/policies/:policyId/pets/new',
                    templateUrl: 'src/client/views/pets/add.html',
                    controller: App.Controllers.PetsController,
                }).state('viewPet', {
                    url: '/pets/:id',
                    templateUrl: 'src/client/views/pets/view.html',
                    controller: App.Controllers.PetsController,
                }).state('editPet', {
                    url: '/pets/:id/edit',
                    templateUrl: 'src/client/views/pets/edit.html',
                    controller: App.Controllers.PetsController,
                });
            };
            return RouteConfig;
        })();
        Configs.RouteConfig = RouteConfig;
    })(Configs = App.Configs || (App.Configs = {}));
})(App || (App = {}));
//# sourceMappingURL=RouteConfig.js.map
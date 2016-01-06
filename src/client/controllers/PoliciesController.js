/// <reference path="../_all.ts" />
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        'use strict';
        var PoliciesController = (function () {
            function PoliciesController($scope, $state, $stateParams) {
                this.$scope = $scope;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.$scope.vm = this;
                this.init();
                if ($stateParams.id) {
                    $scope.policy = new rs.Policy({
                        "id": 173,
                        "name": "Mike",
                        "policyNumber": "USA_000000001",
                        "policyDate": "2015-12-30T13:49:11.88",
                        "countryIsoCode": "USA",
                        "email": "mytest@email.com",
                        "archived": false,
                        "pets": null
                    });
                }
                else {
                    $scope.policy = new rs.Policy(null);
                    $scope.policies = [
                        new rs.Policy({
                            "id": 173,
                            "name": "Mike",
                            "policyNumber": "USA_000000001",
                            "policyDate": "2015-12-30T13:49:11.88",
                            "countryIsoCode": "USA",
                            "email": "mytest@email.com",
                            "archived": false,
                            "pets": null
                        }),
                        new rs.Policy({
                            "id": 171,
                            "name": "Mike",
                            "policyNumber": "USA_000000001",
                            "policyDate": "2015-12-29T17:50:15.76",
                            "countryIsoCode": "USA",
                            "email": "mytest@email.com",
                            "archived": false,
                            "pets": null
                        }),
                        new rs.Policy({
                            "id": 167,
                            "name": "Test",
                            "policyNumber": "USA_000000001",
                            "policyDate": "2015-12-29T17:50:15.74",
                            "countryIsoCode": "USA",
                            "email": "???@gmail.com",
                            "archived": false,
                            "pets": null
                        })
                    ];
                }
            }
            PoliciesController.prototype.init = function () {
                this.$scope.countries = [
                    {
                        "isoCode": "ETH",
                        "name": "Ethiopia"
                    },
                    {
                        "isoCode": "USA",
                        "name": "United States Of America"
                    },
                    {
                        "isoCode": "UKG",
                        "name": "United Kingdom"
                    },
                    {
                        "isoCode": "JPN",
                        "name": "Japan"
                    }
                ];
                console.log(this.$scope.countries);
            };
            PoliciesController.prototype.addPolicy = function () {
                console.log(this.$scope.policy);
            };
            PoliciesController.prototype.showPopup = function (message) {
                console.log(message);
                return true;
            };
            PoliciesController.prototype.cancelPolicy = function (policy) {
                if (this.showPopup('Really delete this?')) {
                }
            };
            PoliciesController.$inject = [
                '$scope',
                '$state',
                '$stateParams'
            ];
            return PoliciesController;
        })();
        Controllers.PoliciesController = PoliciesController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=PoliciesController.js.map
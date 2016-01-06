/// <reference path="../_all.ts" />
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        'use strict';
        var PetsController = (function () {
            function PetsController($scope, $state, $stateParams) {
                this.$scope = $scope;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.$scope.vm = this;
                this.init();
                if ($stateParams.id) {
                    $scope.pet = new rs.Pet({
                        "id": 3,
                        "petOwnerId": 143,
                        "name": "Maine",
                        "dateOfBirth": "2015-01-01T00:00:00",
                        "enrollmentDate": "2015-12-29T16:51:23.833",
                        "breedName": "Maine Coon",
                        "archived": false
                    });
                }
                else {
                    $scope.pet = new rs.Pet(null);
                    $scope.pets = [
                        new rs.Pet({
                            "id": 3,
                            "petOwnerId": 143,
                            "name": "Maine",
                            "dateOfBirth": "2015-01-01T00:00:00",
                            "enrollmentDate": "2015-12-29T16:51:23.833",
                            "breedName": "Maine Coon",
                            "archived": false
                        }),
                        new rs.Pet({
                            "id": 4,
                            "petOwnerId": 143,
                            "name": "Pet 34",
                            "dateOfBirth": "2014-01-01T00:00:00",
                            "enrollmentDate": "2015-12-29T16:53:29.35",
                            "breedName": "German Shepherd",
                            "archived": false
                        }),
                        new rs.Pet({
                            "id": 5,
                            "petOwnerId": 143,
                            "name": "Pet 134",
                            "dateOfBirth": "2013-01-01T00:00:00",
                            "enrollmentDate": "2015-12-29T16:55:27.42",
                            "breedName": "Maltipoo",
                            "archived": false
                        })
                    ];
                }
            }
            PetsController.prototype.init = function () {
                this.$scope.policyId = this.$stateParams.policyId;
                this.$scope.breeds = [
                    new rs.Breed({
                        "id": 1,
                        "name": "German Shepherd"
                    }),
                    new rs.Breed({
                        "id": 2,
                        "name": "Maltipoo"
                    }),
                    new rs.Breed({
                        "id": 3,
                        "name": "Maine Coon"
                    })
                ];
                console.log(this.$scope.breeds);
            };
            PetsController.prototype.addPet = function () {
                this.$scope.pet.petOwnerId = this.$stateParams.policyId;
                console.log(this.$scope.pet);
            };
            PetsController.prototype.showPopup = function (message) {
                console.log(message);
                return true;
            };
            PetsController.prototype.deletePetFromPolicy = function (pet) {
                if (this.showPopup('Really delete this?')) {
                }
            };
            PetsController.$inject = [
                '$scope',
                '$state',
                '$stateParams'
            ];
            return PetsController;
        })();
        Controllers.PetsController = PetsController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=PetsController.js.map
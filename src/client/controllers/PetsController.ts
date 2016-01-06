/// <reference path="../_all.ts" />

module App.Controllers {
    
    'use strict';

    //Interface to describe the scope
    export interface IPetsScope extends ng.IScope {
        pets: Array<rs.Pet>;
        pet: rs.Pet;
        policyId: number;
        breeds: Array<rs.Breed>;
        vm: PetsController;
    }

    export class PetsController {

        public init(): void {
            this.$scope.policyId = this.$stateParams.policyId;
            this.$scope.breeds = [
                           new rs.Breed( {
                                "id": 1,
                                "name": "German Shepherd"
                            }),
                           new rs.Breed( {
                                "id": 2,
                                "name": "Maltipoo"
                            }),
                           new rs.Breed( {
                                "id": 3,
                                "name": "Maine Coon"
                            })
                        ];
            console.log(this.$scope.breeds);
        }

        public static $inject = [
            '$scope', '$state', '$stateParams'
        ];

        constructor(private $scope: IPetsScope,
                    private $state,
                    private $stateParams) {
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
            } else {
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

        public addPet(): void {
            this.$scope.pet.petOwnerId = this.$stateParams.policyId;
            console.log(this.$scope.pet);
        }

        public showPopup(message: string): boolean {
            console.log(message);
            return true;
        }

        public deletePetFromPolicy(pet: rs.Pet): void {
            if (this.showPopup('Really delete this?')) {
            }
        }

        /*
        public updatePet(): void {
            console.log(this.$scope.pet);
            this.$scope.pet.$update(() => {
                this.$state.go('pets'); // on success go back to home i.e. policies state.
            });
        }
        */
    }
}
/// <reference path="../_all.ts" />

module App.Controllers {
    'use strict';

    //Interface to describe the scope
    export interface IPetPolicyScope extends ng.IScope {
        policies: Array<rs.Policy>;
        policy: rs.Policy;
        countries: Array<rs.Country>;
        vm: PoliciesController;
    }

    export class PoliciesController {

        public init(): void {
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
        }

        public static $inject = [
            '$scope', '$state', '$stateParams'
        ];

        constructor(private $scope: IPetPolicyScope,
            private $state,
            private $stateParams) {
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
            } else {
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

        public addPolicy(): void {
            console.log(this.$scope.policy);
        }

        public showPopup(message: string): boolean {
            console.log(message);
            return true;
        }

        public cancelPolicy(policy: rs.Policy): void {
            if (this.showPopup('Really delete this?')) {
            }
        }

        /*
        public updatePolicy(): void {
            console.log(this.$scope.policy);
            this.$scope.policy.$update(() => {
                this.$state.go('policies'); // on success go back to home i.e. policies state.
            });
        }
        */
    }
}
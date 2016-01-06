
module App.Models {
    'use strict';

    export class Breed {
        id: string;
        name: string;
       
        constructor(data: any) {
            if (data != null) {
                this.id = data.id;
                this.name = data.name;
            }
        }
}

    export class Country {
        name: string;
        isoCode: string;
        constructor(data: any) {
            if (data != null) {
                this.name = data.name;
                this.isoCode = data.isoCode;
            }
        }
    }

    export class Pet {
        id: number;
        name: string;
        dateOfBirth: string;
        enrollmentDate: string;
        petOwnerId: string;
        breedName: string;
        archived: boolean;
        constructor(data: any) {
            if (data != null) {
                this.id = data.id;
                this.name = data.name;
                this.dateOfBirth = data.dateOfBirth;
                this.enrollmentDate = data.enrollmentDate;
                this.petOwnerId = data.petOwnerId;
                this.breedName = data.breedName;
                this.archived = data.archived;
            }
        }
    }

    export class Policy {
        id: number;
        name: string;
        policyNumber: string;
        policyDate: string;
        countryIsoCode: string;
        email: string;
        pets: string;

        constructor(data: any) {
            if (data != null) {
                this.id = data.id;
                this.name = data.name;
                this.policyNumber = data.policyNumber;
                this.policyDate = data.policyDate;
                this.countryIsoCode = data.countryIsoCode;
                this.email = data.email;
                this.pets = data.pets;
            }
        }
    }

}  
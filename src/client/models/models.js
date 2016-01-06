var App;
(function (App) {
    var Models;
    (function (Models) {
        'use strict';
        var Breed = (function () {
            function Breed(data) {
                if (data != null) {
                    this.id = data.id;
                    this.name = data.name;
                }
            }
            return Breed;
        })();
        Models.Breed = Breed;
        var Country = (function () {
            function Country(data) {
                if (data != null) {
                    this.name = data.name;
                    this.isoCode = data.isoCode;
                }
            }
            return Country;
        })();
        Models.Country = Country;
        var Pet = (function () {
            function Pet(data) {
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
            return Pet;
        })();
        Models.Pet = Pet;
        var Policy = (function () {
            function Policy(data) {
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
            return Policy;
        })();
        Models.Policy = Policy;
    })(Models = App.Models || (App.Models = {}));
})(App || (App = {}));
//# sourceMappingURL=models.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var add_person_action_1 = require("../actions/add-person.action");
var store_accessor_1 = require("../store-accessor");
var PeopleService = (function () {
    function PeopleService(storeAccessor, addPersonAction) {
        var _this = this;
        this.storeAccessor = storeAccessor;
        addPersonAction.subscribe(function (person) { return _this.addPerson(person); });
    }
    PeopleService.prototype.addPerson = function (person) {
        person.age = person.age + 1;
        this.storeAccessor.updateStore(function (store) {
            store.people.push(person);
            return store;
        });
    };
    return PeopleService;
}());
PeopleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_accessor_1.StoreAccessor,
        add_person_action_1.AddPersonAction])
], PeopleService);
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map
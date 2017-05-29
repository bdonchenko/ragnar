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
var AppComponent = (function () {
    function AppComponent(addPersonAction) {
        var _this = this;
        this.addPersonAction = addPersonAction;
        var i = 0;
        setInterval(function () {
            i++;
            var person = {
                name: "Person " + i,
                age: i
            };
            _this.addPersonAction.dispatch(person);
        }, 1000);
    }
    AppComponent.prototype.addPerson = function (person) {
        this.addPersonAction.dispatch(person);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<people></people>"
    }),
    __metadata("design:paramtypes", [add_person_action_1.AddPersonAction])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
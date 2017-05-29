"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var store_accessor_1 = require("../store-accessor");
var BaseComponent_1 = require("ragnar/BaseComponent");
var PeopleComponent = (function (_super) {
    __extends(PeopleComponent, _super);
    function PeopleComponent(storeAccessor) {
        return _super.call(this, storeAccessor) || this;
    }
    PeopleComponent.prototype.onStoreUpdated = function (store) {
        this.people = store.people;
    };
    return PeopleComponent;
}(BaseComponent_1.BaseComponent));
PeopleComponent = __decorate([
    core_1.Component({
        selector: 'people',
        template: "\n  <ul>\n    <li *ngFor=\"let person of people\">{{person.name}} is {{person.age}} years old.</li>\n  </ul>",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof store_accessor_1.StoreAccessor !== "undefined" && store_accessor_1.StoreAccessor) === "function" && _a || Object])
], PeopleComponent);
exports.PeopleComponent = PeopleComponent;
var _a;
//# sourceMappingURL=peaople.component.js.map
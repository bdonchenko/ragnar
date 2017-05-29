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
var platform_browser_1 = require("@angular/platform-browser");
var people_service_1 = require("./services/people.service");
var add_person_action_1 = require("./actions/add-person.action");
var store_1 = require("./store");
var store_accessor_1 = require("./store-accessor");
var app_component_1 = require("./components/app/app.component");
var people_component_1 = require("./components/people/people.component");
var AppModule = (function () {
    function AppModule(injector) {
        this.injector = injector;
        injector.get(people_service_1.PeopleService);
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent, people_component_1.PeopleComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            //Store
            store_1.Store,
            store_accessor_1.StoreAccessor,
            //Actions
            add_person_action_1.AddPersonAction,
            //Services
            people_service_1.PeopleService
        ]
    }),
    __metadata("design:paramtypes", [core_1.Injector])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
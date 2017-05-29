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
var BaseStoreAccessor_1 = require("ragnar/BaseStoreAccessor");
var core_1 = require("@angular/core");
var store_1 = require("./store");
var StoreAccessor = (function (_super) {
    __extends(StoreAccessor, _super);
    function StoreAccessor(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        return _this;
    }
    return StoreAccessor;
}(BaseStoreAccessor_1.BaseStoreAccessor));
StoreAccessor = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store])
], StoreAccessor);
exports.StoreAccessor = StoreAccessor;
//# sourceMappingURL=store-accessor.js.map
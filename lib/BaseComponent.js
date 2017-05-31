"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent = (function () {
    function BaseComponent(storeAccessor) {
        this.storeAccessor = storeAccessor;
        this.subscriptions = [];
    }
    BaseComponent.prototype.ngOnInit = function (readStoreDataImmediately) {
        var _this = this;
        if (readStoreDataImmediately === void 0) { readStoreDataImmediately = true; }
        if (!this.storeAccessor) {
            return;
        }
        var subscription = this.storeAccessor
            .subscribe(function (store) { return _this.onStoreUpdated(store); }, readStoreDataImmediately);
        this.subscriptions.push(subscription);
    };
    BaseComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        console.log('Unsubscribed:', this.subscriptions.map(function (s) { return s.closed; }));
    };
    BaseComponent.prototype.onStoreUpdated = function (store) { };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;

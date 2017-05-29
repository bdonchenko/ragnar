"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent = (function () {
    function BaseComponent(storeAccessor) {
        this.storeAccessor = storeAccessor;
    }
    BaseComponent.prototype.ngOnInit = function (readStoreDataImmediately) {
        var _this = this;
        if (readStoreDataImmediately === void 0) { readStoreDataImmediately = true; }
        if (!this.storeAccessor) {
            return;
        }
        this.storeUnsubscribe =
            this.storeAccessor
                .subscribeStore(function (store) { return _this.onStoreUpdated(store); }, readStoreDataImmediately);
    };
    BaseComponent.prototype.ngOnDestroy = function () {
        if (this.storeUnsubscribe) {
            this.storeUnsubscribe();
        }
    };
    BaseComponent.prototype.onStoreUpdated = function (store) { };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;

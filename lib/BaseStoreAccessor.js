"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseStoreAccessor = (function () {
    function BaseStoreAccessor(store) {
        this.subscribers = [];
        BaseStoreAccessor.store = store;
    }
    BaseStoreAccessor.prototype.subscribeStore = function (callback, executeImmediately) {
        var _this = this;
        this.subscribers.push(callback);
        if (executeImmediately) {
            callback(BaseStoreAccessor.store);
        }
        return function () {
            _this.subscribers = _this.subscribers.filter(function (s) { return s !== callback; });
        };
    };
    BaseStoreAccessor.prototype.updateStore = function (updateFunc) {
        BaseStoreAccessor.store = updateFunc(Object.assign({}, BaseStoreAccessor.store));
        this.subscribers
            .reverse()
            .forEach(function (callback) { return callback(BaseStoreAccessor.store); });
    };
    return BaseStoreAccessor;
}());
exports.BaseStoreAccessor = BaseStoreAccessor;

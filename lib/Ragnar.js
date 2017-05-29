"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseAction = (function () {
    function BaseAction() {
        this.subscribers = [];
    }
    BaseAction.prototype.subscribe = function (callback) {
        var _this = this;
        this.subscribers.push(callback);
        return function () {
            _this.subscribers = _this.subscribers.filter(function (s) { return s !== callback; });
        };
    };
    BaseAction.prototype.dispatch = function (data) {
        this.subscribers
            .reverse()
            .forEach(function (callback) { return callback(data); });
    };
    return BaseAction;
}());
exports.BaseAction = BaseAction;

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

var StoreAccessor = (function () {
    function StoreAccessor(store) {
        this.subscribers = [];
        StoreAccessor.store = store;
    }
    StoreAccessor.prototype.subscribeStore = function (callback, executeImmediately) {
        var _this = this;
        this.subscribers.push(callback);
        if (executeImmediately) {
            callback(StoreAccessor.store);
        }
        return function () {
            _this.subscribers = _this.subscribers.filter(function (s) { return s !== callback; });
        };
    };
    StoreAccessor.prototype.updateStore = function (updateFunc) {
        StoreAccessor.store = updateFunc(StoreAccessor.store);
    };
    return StoreAccessor;
}());
exports.StoreAccessor = StoreAccessor;

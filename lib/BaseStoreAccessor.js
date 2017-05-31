"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
var BaseStoreAccessor = (function () {
    function BaseStoreAccessor(store) {
        this.subject = new Subject_1.Subject();
        BaseStoreAccessor.store = store;
    }
    BaseStoreAccessor.prototype.subscribe = function (callback, executeImmediately) {
        if (executeImmediately) {
            callback(BaseStoreAccessor.store);
        }
        return this.subject.subscribe(callback);
    };
    BaseStoreAccessor.prototype.updateStore = function (updateFunc) {
        var store = updateFunc(Object.assign({}, BaseStoreAccessor.store));
        BaseStoreAccessor.store = store;
        this.subject.next(Object.assign({}, store));
    };
    return BaseStoreAccessor;
}());
exports.BaseStoreAccessor = BaseStoreAccessor;

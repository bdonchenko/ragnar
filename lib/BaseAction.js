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

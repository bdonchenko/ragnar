"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
var BaseAction = (function () {
    function BaseAction() {
        this.subject = new Subject_1.Subject();
    }
    BaseAction.prototype.subscribe = function (callback) {
        return this.subject.subscribe(callback);
    };
    BaseAction.prototype.dispatch = function (data) {
        this.subject.next(data);
    };
    return BaseAction;
}());
exports.BaseAction = BaseAction;

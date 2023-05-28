var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 用户输入行为类
 */
var Input = /** @class */ (function () {
    function Input(controller) {
        this.controller = controller;
    }
    return Input;
}());
export { Input };
var KeyboardInput = /** @class */ (function (_super) {
    __extends(KeyboardInput, _super);
    function KeyboardInput(controller) {
        return _super.call(this, controller) || this;
    }
    KeyboardInput.prototype.listen = function () {
        var _this = this;
        document.addEventListener("keydown", function (event) {
            console.log(event.key);
            _this.controller.deal(event.key);
        });
    };
    KeyboardInput.prototype.off = function () {
    };
    return KeyboardInput;
}(Input));
export { KeyboardInput };

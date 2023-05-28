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
 * 用户行为 对应 游戏行为类
 */
var Controller = /** @class */ (function () {
    function Controller(tank) {
        this.tank = tank;
    }
    return Controller;
}());
export { Controller };
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController(tank) {
        return _super.call(this, tank) || this;
    }
    PlayerController.prototype.deal = function (op) {
        switch (op) {
            case "ArrowUp":
                this.tank.up();
                break;
            case "ArrowDown":
                this.tank.up();
                break;
            case "ArrowLeft":
                this.tank.up();
                break;
            case "ArrowRight":
                this.tank.up();
                break;
            default:
                return;
        }
    };
    return PlayerController;
}(Controller));
export { PlayerController };

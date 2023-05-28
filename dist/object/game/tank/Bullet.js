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
var Bullet = /** @class */ (function () {
    function Bullet() {
        this.width = 1;
        this.height = 1;
    }
    Bullet.prototype.draw = function () {
    };
    return Bullet;
}());
export { Bullet };
var NormalBullet = /** @class */ (function (_super) {
    __extends(NormalBullet, _super);
    function NormalBullet() {
        var _this = _super.call(this) || this;
        _this.height = 2;
        return _this;
    }
    NormalBullet.prototype.create = function () {
    };
    return NormalBullet;
}(Bullet));
export { NormalBullet };

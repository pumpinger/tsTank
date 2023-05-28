import { Location } from "../../base/Location.js";
var Tank = /** @class */ (function () {
    function Tank(bullet) {
        this.location = new Location(0, 0);
        this.height = 30;
        this.width = 30;
        this.bullet = bullet;
    }
    Tank.prototype.draw = function () {
    };
    Tank.prototype.up = function () {
        this.location.x -= 1;
    };
    Tank.prototype.down = function () {
        this.location.x += 1;
    };
    Tank.prototype.left = function () {
        this.location.y -= 1;
    };
    Tank.prototype.right = function () {
        this.location.y += 1;
    };
    Tank.prototype.getLocation = function () {
        console.log(this.location);
    };
    Tank.prototype.fire = function () {
        this.bullet.create();
    };
    return Tank;
}());
export { Tank };

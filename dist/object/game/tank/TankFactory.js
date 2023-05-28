import { HeavyTank } from "./HeavyTank.js";
import { NormalBullet } from "./Bullet.js";
import { FastTank } from "./FastTank.js";
var TankFactory = /** @class */ (function () {
    function TankFactory() {
    }
    TankFactory.createPlayerTank = function () {
        return new HeavyTank(new NormalBullet(), '玩家坦克');
    };
    TankFactory.createEnemyTank = function () {
        return new FastTank(new NormalBullet(), '玩家坦克');
    };
    return TankFactory;
}());
export { TankFactory };

import {HeavyTank} from "./HeavyTank.js";
import { NormalBullet} from "./Bullet.js";
import {FastTank} from "./FastTank.js";
import { Tank } from "./Tank";

export class TankFactory {

    static createPlayerTank() : Tank{
        return new HeavyTank(new NormalBullet(),'玩家坦克')
    }

    static createEnemyTank(){
        return new FastTank(new NormalBullet(),'玩家坦克')
    }
 }


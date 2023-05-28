import { FastTank } from "./FastTank.js";
import { Tank } from "./Tank";
export declare class TankFactory {
    static createPlayerTank(): Tank;
    static createEnemyTank(): FastTank;
}

import { Tank } from "../object/game/tank/Tank.js";
/**
 * 用户行为 对应 游戏行为类
 */
export declare abstract class Controller {
    protected tank: Tank;
    constructor(tank: Tank);
    abstract deal(op: string): void;
}
export declare class PlayerController extends Controller {
    constructor(tank: Tank);
    deal(op: string): void;
}

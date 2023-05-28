import {Tank} from "../object/game/tank/Tank.js";


/**
 * 用户行为 对应 游戏行为类
 */


export abstract class Controller {
    protected tank:Tank

    constructor(tank:Tank) {
        this.tank = tank
    }

    abstract deal(op:string):void
}

export  class PlayerController extends Controller {

    constructor(tank:Tank) {
        super(tank);
    }

    deal(op:string) {
        switch (op) {
            case "ArrowUp":
                this.tank.up()
                break;
            case "ArrowDown":
                this.tank.down()
                break;
            case "ArrowLeft":
                this.tank.left()
                break;
            case "ArrowRight":
                this.tank.right()
                break;
            default:
                return;
        }

    }
}
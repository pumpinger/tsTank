import {Tank} from "../object/game/tank/Tank.js";
import {InputEnum} from "../Input";


/**
 * 用户行为 对应 游戏行为类
 */


export abstract class Controller {
    protected tank:Tank

    constructor(tank:Tank) {
        this.tank = tank
    }

    abstract deal(inputEnum:InputEnum):void
}

export  class PlayerController extends Controller {

    constructor(tank:Tank) {
        super(tank);
    }

    deal(inputEnum:InputEnum) {
        switch (inputEnum) {
            case InputEnum.UP:
                this.tank.up()
                break;
            case InputEnum.DOWN:
                this.tank.down()
                break;
            case InputEnum.LEFT:
                this.tank.left()
                break;
            case InputEnum.RIGHT:
                this.tank.right()
                break;
            case InputEnum.FIRE:
                this.tank.fire()
                break;
            default:
                return;
        }

    }
}
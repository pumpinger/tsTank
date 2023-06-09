import {Tank, TankEnum} from "./Tank.js";
import {Bullet} from "./Bullet.js";
import {DrawTank} from "../../../render/DrawTank.js";


export class HeavyTank extends Tank{
    speed = 4
    type: TankEnum
    draw() {
        new DrawTank().draw(this)
    }


    private name: string = '重坦克';

    constructor(bullet:Bullet, name: string) {
        super(bullet);
        this.width = 40
        this.height = 40
        this.type = TankEnum.HEAVY
    }


}
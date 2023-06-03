import {Tank, TankEnum} from "./Tank.js";
import {Bullet} from "./Bullet.js";
import {DrawTank} from "../../../render/DrawTank.js";


export class FastTank extends Tank{
    speed = 10
    type: TankEnum;

    draw() {
        new DrawTank().draw(this)
    }

    private name: string = '快坦克';

    constructor(bullet:Bullet, name: string) {
        super(bullet);
        this.name = name
        this.width = 20
        this.type = TankEnum.FAST
    }



    fire(): void {

    }


}
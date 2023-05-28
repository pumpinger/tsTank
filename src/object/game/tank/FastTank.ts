import {Shot, Tank} from "./Tank.js";
import {Bullet} from "./Bullet.js";


export class FastTank extends Tank{
    draw() {
    }
    private name: string = '快坦克';

    constructor(bullet:Bullet, name: string) {
        super(bullet);
        this.name = name
        this.width = 20
    }



    fire(): void {

    }


}
import {Tank} from "./Tank";
import {game} from "../../../index";
import {Bullet} from "./Bullet.js";


export class HeavyTank extends Tank{
    draw() {
    }
    private name: string = '重坦克';

    constructor(bullet:Bullet, name: string) {
        super(bullet);
        this.width = 40
        this.height = 40
    }


    fire(): void {
    }


}
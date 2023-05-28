import { Location } from "../../base/Location.js";
import {Entity} from "../../interface/Entity.js";

export abstract class Bullet extends Entity {
    width: number;
    height: number;
    location?: Location | undefined;
    abstract create():void

    constructor() {
        super()
        this.width = 1;
        this.height = 1;
    }


    draw(): void {
    }

}


export  class NormalBullet extends Bullet{
    constructor() {
        super();
        this.height = 2
    }


    create():void {

    }

}
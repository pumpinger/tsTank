import { Location } from "../../base/Location.js";
import {Entity} from "../../interface/Entity.js";
import {DrawBullet} from "../../../render/Draw.js";

export abstract class Bullet extends Entity {
    width: number;
    height: number;
    abstract create(body:Entity):void

    constructor() {
        super()
        this.width = 1;
        this.height = 1;
    }


    abstract draw():void

}


export  class NormalBullet extends Bullet{
    location: Location = new Location();
    constructor() {
        super();
        this.height = 2
    }


    create(body:Entity):void {
        this.location = Object.assign({},body.location)
        // this.location =  body.location

    }

    draw(): void {
        new DrawBullet().draw(this)
    }

}
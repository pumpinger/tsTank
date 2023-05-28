import {Entity} from "../../interface/Entity.js";
import {Location} from "../../base/Location.js";
import {Bullet} from "./Bullet.js";

export const enum TankEnum {
    FAST = 1,
    HEAVY,
}

export  interface Shot
{
    fire():void
}

export  interface Move
{

    up(): void
    down():  void
    left():  void
    right():  void
}




export abstract class Tank  extends Entity implements Shot,Move{
    private bullet: Bullet;
    abstract type:TankEnum
    draw() {
    }

    constructor(bullet:Bullet) {
        super()
        this.isDefaultRender = true
        this.bullet = bullet
    }

    up(): void{
        this.location.y -= 1
    }
    down():  void{
        this.location.y += 1
    }
    left():  void{
        this.location.x -= 1
    }
    right():  void{
        this.location.x += 1
    }

    getLocation(){
        console.log(this.location);
    }

    location: Location = new Location(0,0);
    height: number = 30;
    width: number = 30;

    fire(): void {
        this.bullet.create()
    }
}


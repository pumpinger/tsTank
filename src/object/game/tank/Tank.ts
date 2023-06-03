import {Entity} from "../../interface/Entity.js";
import {Location} from "../../base/Location.js";
import {Bullet} from "./Bullet.js";
import {game} from "../../../index.js";

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
    protected speed:number = 5;
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
        this.location.y -= this.speed
    }
    down():  void{
        this.location.y += this.speed
    }
    left():  void{
        this.location.x -= this.speed
    }
    right():  void{
        this.location.x += this.speed
    }

    getLocation(){
        console.log(this.location);
    }

    location: Location = new Location(game.scene.size.width/2,game.scene.size.height/2);
    height: number = 30;
    width: number = 30;

    fire(): void {
        this.bullet.create(this)
    }
}


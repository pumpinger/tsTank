import {Entity} from "../../interface/Entity.js";
import {Location} from "../../base/Location.js";
import {Bullet} from "./Bullet.js";

interface drawFunc{
    ():void
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




export abstract class Tank  implements Entity,Shot,Move{
    private bullet: Bullet;
    draw() {
    }

    constructor(bullet:Bullet) {
        this.bullet = bullet
    }

    up(): void{
        this.location.x -= 1
    }
    down():  void{
        this.location.x += 1
    }
    left():  void{
        this.location.y -= 1
    }
    right():  void{
        this.location.y += 1
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


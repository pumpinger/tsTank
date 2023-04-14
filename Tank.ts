import {Entity} from "./Entity.js";
import {Location} from "./Location.js";

interface drawFunc{
    ():void
}


export abstract class Tank  implements Entity {
    draw() {
    }

    abstract up(): number
    abstract down(): number
    abstract left(): number
    abstract right(): number

    getLocation(){
        console.log(this.location);
    }

    location: Location = new Location(0,0);
    height: number = 30;
    width: number = 30;
}


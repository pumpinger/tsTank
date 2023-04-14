import {Entity} from "./Entity.js";
import {Location} from "./Location.js";
import {Tank} from "./Tank.js";
import {game} from "./index.js";


export class HeavyTank extends Tank{
    draw() {
    }
    private name: string = '重坦克';

    constructor(name: string) {
        super();
        this.width = 40
        this.height = 40
    }


    up(): number {
        game.stop()
        return 0;
    }

    down(): number {
        return 0;
    }

    left(): number {
        return 0;
    }

    right(): number {
        return 0;
    }


}
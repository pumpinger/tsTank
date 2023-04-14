import {Entity} from "./Entity.js";
import {Location} from "./Location.js";
import {Tank} from "./Tank.js";


export class FastTank extends Tank{
    private name: string = '快坦克';

    constructor(name: string) {
        super();
        this.name = name
        this.width = 20
    }


    up(): number {
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
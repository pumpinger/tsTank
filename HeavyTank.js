import { Tank } from "./Tank.js";
export class HeavyTank extends Tank {
    constructor(name) {
        super();
        this.name = '重坦克';
        this.width = 40;
        this.height = 40;
    }
    up() {
        return 0;
    }
    down() {
        return 0;
    }
    left() {
        return 0;
    }
    right() {
        return 0;
    }
}

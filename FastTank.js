import { Tank } from "./Tank.js";
export class FastTank extends Tank {
    constructor(name) {
        super();
        this.name = '快坦克';
        this.name = name;
        this.width = 20;
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

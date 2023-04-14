import { Tank } from "./Tank.js";
import { game } from "./index.js";
export class HeavyTank extends Tank {
    draw() {
    }
    constructor(name) {
        super();
        this.name = '重坦克';
        this.width = 40;
        this.height = 40;
    }
    up() {
        game.stop();
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

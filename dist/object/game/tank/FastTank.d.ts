import { Tank } from "./Tank.js";
import { Bullet } from "./Bullet.js";
export declare class FastTank extends Tank {
    draw(): void;
    private name;
    constructor(bullet: Bullet, name: string);
    fire(): void;
}

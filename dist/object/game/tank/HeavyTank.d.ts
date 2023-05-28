import { Tank } from "./Tank";
import { Bullet } from "./Bullet.js";
export declare class HeavyTank extends Tank {
    draw(): void;
    private name;
    constructor(bullet: Bullet, name: string);
    fire(): void;
}

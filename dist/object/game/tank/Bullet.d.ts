import { Location } from "../../base/Location.js";
import { Entity } from "../../interface/Entity.js";
export declare abstract class Bullet implements Entity {
    width: number;
    height: number;
    location?: Location | undefined;
    abstract create(): void;
    constructor();
    draw(): void;
}
export declare class NormalBullet extends Bullet {
    constructor();
    create(): void;
}

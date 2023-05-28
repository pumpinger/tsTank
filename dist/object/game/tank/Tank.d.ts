import { Entity } from "../../interface/Entity.js";
import { Location } from "../../base/Location.js";
import { Bullet } from "./Bullet.js";
export interface Shot {
    fire(): void;
}
export interface Move {
    up(): void;
    down(): void;
    left(): void;
    right(): void;
}
export declare abstract class Tank implements Entity, Shot, Move {
    private bullet;
    draw(): void;
    constructor(bullet: Bullet);
    up(): void;
    down(): void;
    left(): void;
    right(): void;
    getLocation(): void;
    location: Location;
    height: number;
    width: number;
    fire(): void;
}

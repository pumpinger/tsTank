import { Entity } from "./Entity.js";
import { Location } from "./Location.js";
export declare abstract class Tank implements Entity {
    draw(): void;
    abstract up(): number;
    abstract down(): number;
    abstract left(): number;
    abstract right(): number;
    getLocation(): void;
    location: Location;
    height: number;
    width: number;
}

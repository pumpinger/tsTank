import { Tank } from "./Tank.js";
export declare class HeavyTank extends Tank {
    draw(): void;
    private name;
    constructor(name: string);
    up(): number;
    down(): number;
    left(): number;
    right(): number;
}

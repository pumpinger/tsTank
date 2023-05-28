import { Input } from "./Input.js";
export declare class Game {
    canvas: HTMLCanvasElement;
    private scene;
    private ctx;
    constructor(canvas: HTMLCanvasElement);
    init(): void;
    stop(input: Input): void;
    start(): void;
}

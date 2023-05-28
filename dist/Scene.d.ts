import { Object } from "./object/interface/Object.js";
export declare class Scene {
    private gameScene;
    private canvas;
    private ctx;
    constructor(gameScene: Object, canvas: HTMLCanvasElement);
    getCtx(): CanvasRenderingContext2D | null;
}

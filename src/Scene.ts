import {createCanvas} from "./tools/canvas.js";
import {Object} from "./object/interface/Object.js";

export class Scene {
    private gameScene: Object;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null = null;
    constructor(gameScene:Object, canvas:HTMLCanvasElement) {
        this.gameScene = gameScene;
        this.canvas = canvas
    }

    getCtx(): CanvasRenderingContext2D | null {
        if( ! this.ctx ){
            this.ctx = createCanvas(this.canvas, this.gameScene);
        }
        return this.ctx
    }
}
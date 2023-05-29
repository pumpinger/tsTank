import {createCanvas} from "./tools/canvas.js";
import {Object} from "./object/interface/Object.js";

export class Scene {
    private gameScene: Object;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    constructor(gameScene:Object, canvas:HTMLCanvasElement) {
        this.gameScene = gameScene;
        this.canvas = canvas

        let ctx =  createCanvas(this.canvas, this.gameScene);
        if (ctx){
            this.ctx = ctx
        }else{
            throw new Error('no useful ctx')
        }
    }

    getCtx(): CanvasRenderingContext2D {
        return this.ctx
    }
}
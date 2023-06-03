import {createCanvas} from "./tools/canvas.js";
import {Object} from "./object/interface/Object.js";

export class Scene {
    size: Object;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    constructor(size:Object, canvas:HTMLCanvasElement) {
        this.size = size;
        this.canvas = canvas

        let ctx =  createCanvas(this.canvas, this.size);
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
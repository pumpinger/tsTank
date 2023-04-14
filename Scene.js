import { createCanvas } from "./canvas.js";
export class Scene {
    constructor(gameScene, canvas) {
        this.ctx = null;
        this.gameScene = gameScene;
        this.canvas = canvas;
    }
    getCtx() {
        if (!this.ctx) {
            this.ctx = createCanvas(this.canvas, this.gameScene);
        }
        return this.ctx;
    }
}

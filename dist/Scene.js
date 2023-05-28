import { createCanvas } from "./tools/canvas.js";
var Scene = /** @class */ (function () {
    function Scene(gameScene, canvas) {
        this.ctx = null;
        this.gameScene = gameScene;
        this.canvas = canvas;
    }
    Scene.prototype.getCtx = function () {
        if (!this.ctx) {
            this.ctx = createCanvas(this.canvas, this.gameScene);
        }
        return this.ctx;
    };
    return Scene;
}());
export { Scene };

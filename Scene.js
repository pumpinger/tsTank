import { createCanvas } from "./canvas.js";
export class Scene {
    constructor(entity, canvas) {
        createCanvas(canvas, entity);
    }
}

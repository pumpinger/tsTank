import {Entity} from "./Entity.js";
import {createCanvas} from "./canvas.js";

export class Scene {
    constructor(entity:Entity, canvas:any) {
        createCanvas(canvas,entity)
    }
}
import {Entity} from "../object/interface/Entity.js";
import {Object} from "../object/interface/Object.js";


let createCanvas = (canvas:HTMLCanvasElement,scenceEntity:Object):CanvasRenderingContext2D | null=>{
    let ctx: CanvasRenderingContext2D | null;
    ctx = canvas.getContext("2d");
    canvas.width = scenceEntity.width;
    canvas.height = scenceEntity.height;

    return ctx;


}


export {
    createCanvas
}


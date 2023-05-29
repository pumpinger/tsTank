import {Entity} from "../object/interface/Entity.js";
import {Object} from "../object/interface/Object.js";


let createCanvas = (canvas:HTMLCanvasElement,gameScene:Object):CanvasRenderingContext2D | null=>{
    let ctx: CanvasRenderingContext2D | null;
    ctx = canvas.getContext("2d");
    canvas.width = gameScene.width;
    canvas.height = gameScene.height;

    return ctx;


}


export {
    createCanvas
}


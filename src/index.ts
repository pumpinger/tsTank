import {Game} from "./Game.js";
import {Render} from "./render/Render.js";

let canvas: HTMLCanvasElement | null;
canvas = document.querySelector("canvas");

let game:Game
if(canvas !== null){
    let render:Render;
    render = new Render();
    game = new Game(canvas,render);
    game.init()
    render.start()
    game.start()
}else{
    console.warn('不存在canvas');
}

export {
    game
}

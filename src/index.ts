import {Game} from "./Game.js";
import {Render} from "./render/Render.js";

let canvas: HTMLCanvasElement | null;
canvas = document.querySelector("canvas");

let game:Game
if(canvas !== null){
    game = new Game(canvas);
    game.init()

    //按下按钮开始 之类的.
    game.start()
}else{
    console.warn('不存在canvas');
}

export {
    game
}

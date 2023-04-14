import {Game} from "./Game.js";

let canvas: HTMLCanvasElement | null;
canvas = document.querySelector("canvas");

let game:Game
if(canvas !== null){
    game = new Game(canvas);
    game.start()
}else{
    console.warn('不存在canvas');
}

export {
    game
}

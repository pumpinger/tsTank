import { Game } from "./Game.js";
var canvas;
canvas = document.querySelector("canvas");
var game;
if (canvas !== null) {
    game = new Game(canvas);
    game.init();
    game.start();
}
else {
    console.warn('不存在canvas');
}
export { game };

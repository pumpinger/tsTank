import { Scene } from "./Scene.js";
import { TankFactory } from "./object/game/tank/TankFactory.js";
import { PlayerController } from "./controller/Controller.js";
import { KeyboardInput } from "./Input.js";
var Game = /** @class */ (function () {
    function Game(canvas) {
        this.canvas = canvas;
        this.scene = new Scene({
            width: this.canvas.width,
            height: this.canvas.height
        }, this.canvas);
        this.ctx = this.scene.getCtx();
    }
    Game.prototype.init = function () {
        console.log('游戏初始化');
    };
    Game.prototype.stop = function (input) {
        console.log('游戏结束');
        input.off();
    };
    Game.prototype.start = function () {
        console.log('游戏开始');
        var tank = TankFactory.createPlayerTank();
        var controller = new PlayerController(tank);
        var input = new KeyboardInput(controller);
        input.listen();
    };
    return Game;
}());
export { Game };

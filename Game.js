import { Scene } from "./Scene.js";
import { FastTank } from "./FastTank.js";
export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        let scene = new Scene({
            width: 600,
            height: 600
        }, this.canvas);
    }
    start() {
        let tank = new FastTank('98');
        // let user = new UserController()
        // user.setTank( tank)
        console.log('游戏开始');
        tank.getLocation();
    }
}

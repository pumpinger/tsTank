import { Scene } from "./Scene.js";
import { HeavyTank } from "./HeavyTank.js";
export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.scene = new Scene({
            width: 600,
            height: 600
        }, this.canvas);
        this.ctx = this.scene.getCtx();
    }
    start() {
        if (this.ctx === null) {
            console.warn('没有ctx');
        }
        console.log('游戏开始');
        // let tank = new FastTank('98')
        let tank = new HeavyTank('98');
        tank.getLocation();
        tank.up();
        // let user = new UserController()
        // user.setTank( tank)
    }
    stop() {
        console.log('游戏结束');
    }
}

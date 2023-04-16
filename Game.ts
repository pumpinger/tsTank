import {Tank} from "./Tank.js";
import {Scene} from "./Scene.js";
import {FastTank} from "./FastTank.js";
import {HeavyTank} from "./HeavyTank.js";

export class Game {
    canvas:HTMLCanvasElement
    private scene: Scene;
    private ctx: CanvasRenderingContext2D | null;
    constructor(canvas:HTMLCanvasElement) {
        this.canvas = canvas
        this.scene  = new Scene({
            width:600,
            height:600
        },this.canvas)
        this.ctx = this.scene.getCtx()

    }

    start():void{
        if(this.ctx === null){
            console.warn('没有ctx');
        }

        console.log('游戏开始');


        let tank2 = new FastTank('98')
        let tank = new HeavyTank('98')
        let aa:any = 3
        console.log(aa);
        tank.getLocation()
        tank.up()
        // let user = new UserController()
        // user.setTank( tank)

    }

    stop():void{
        console.log('游戏结束');
    }
}
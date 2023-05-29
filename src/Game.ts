import {Tank} from "./object/game/tank/Tank";
import {Scene} from "./Scene.js";
import {FastTank} from "./object/game/tank/FastTank";
import {HeavyTank} from "./object/game/tank/HeavyTank";
import {TankFactory} from "./object/game/tank/TankFactory.js";
import {Controller, PlayerController} from "./controller/Controller.js";
import {Input, KeyboardInput} from "./Input.js";
import {Render} from "./render/Render.js";

export class Game {
    canvas:HTMLCanvasElement
    private scene: Scene;
    ctx: CanvasRenderingContext2D;
    render: Render;
    constructor(canvas:HTMLCanvasElement) {
        this.canvas = canvas

        this.scene  = new Scene({
            width:this.canvas.width,
            height:this.canvas.height
        },this.canvas)
        this.ctx = this.scene.getCtx()
        this.render = new Render(this.ctx,this.canvas);

    }

    init():void{
        this.render.start()
        console.log('游戏初始化');

    }

    stop(input:Input):void{
        console.log('游戏结束');
        input.off()
    }

    start():void {
        console.log('游戏开始');
        let tank = TankFactory.createPlayerTank()
        let controller = new PlayerController(tank)
        let input  = new KeyboardInput(controller)
        input.listen()
    }
}
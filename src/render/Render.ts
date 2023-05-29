import {Entity} from "../object/interface/Entity.js";

export class Render {
    entitys:Entity[] = []
    private ctx:CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement
    ;

    add(entity:Entity){
        this.entitys.push(entity)
    }

    constructor(ctx:CanvasRenderingContext2D,canvas: HTMLCanvasElement) {
        this.ctx = ctx
        this.canvas = canvas
    }

    start(){
        let  update = ()=>{
            this.render()
            requestAnimationFrame(update);
        }
        update();
    }

    render(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.entitys.map((entity)=>{
            entity.draw()
        })
    }
}
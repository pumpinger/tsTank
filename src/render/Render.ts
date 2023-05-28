import {Entity} from "../object/interface/Entity.js";

export class Render {
    entitys:Entity[] = []

    add(entity:Entity){
        this.entitys.push(entity)
    }

    start(){
        let  update = ()=>{
            this.render()
            requestAnimationFrame(update);
        }

        update();
    }

    render(){
        this.entitys.map((entity)=>{
            entity.draw()
        })
    }
}
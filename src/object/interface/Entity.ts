import {Object} from "./Object.js";
import {game} from "../../index.js";

export abstract class Entity extends Object{
    abstract draw():void
    isDefaultRender:Boolean = false

    constructor() {
        super()
        if (!this.isDefaultRender){
            game.render.add(this)
        }
    }


}
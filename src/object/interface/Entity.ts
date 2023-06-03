import {Object} from "./Object.js";
import {game} from "../../index.js";
import {Location} from "../base/Location";

export abstract class Entity extends Object{
    abstract draw():void
    abstract location:Location
    isDefaultRender:Boolean = false

    constructor() {
        super()
        if (!this.isDefaultRender){
            game.render.add(this)
        }
    }


}
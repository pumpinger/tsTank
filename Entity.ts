import {Location} from "./Location.js";
import {Object} from "./Object.js";

export interface Entity extends Object{
    draw():void
}
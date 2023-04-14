import {Location} from "./Location.js";

export interface Entity {
    width: number;
    height: number;
    location?:Location
}
import { Location } from "./Location.js";
export class Tank {
    constructor() {
        this.location = new Location(0, 0);
        this.height = 30;
        this.width = 30;
    }
    getLocation() {
        console.log(this.location);
    }
}

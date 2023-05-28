import {Controller} from "./controller/Controller.js";

/**
 * 用户输入行为类
 */

export abstract class Input {
    protected controller: Controller;
    constructor(controller:Controller) {
        this.controller = controller
    }

    abstract listen():void
    abstract off():void
}

export class KeyboardInput extends Input {

    constructor(controller:Controller) {
        super(controller);

    }

    listen() {
        document.addEventListener("keydown", (event) => {
            console.log(event.key)
            this.controller.deal(event.key);
        });
    }

    off(){

    }
}
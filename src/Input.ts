import {Controller} from "./controller/Controller.js";


export const enum InputEnum {
    NONE = 0,
    UP = 1,
    DOWN,
    LEFT,
    RIGHT,
    FIRE,
}

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
            console.log('键盘:',event.code)
            this.controller.deal( this.switch(event.code) );
        });
    }

    switch(eventKey: string):InputEnum{
        switch (eventKey) {
            case "ArrowUp":
                return InputEnum.UP
                break;
            case "ArrowDown":
                return InputEnum.DOWN
                break;
            case "ArrowLeft":
                return InputEnum.LEFT
                break;
            case "ArrowRight":
                return InputEnum.RIGHT
                break;
            case "Space":
                return InputEnum.FIRE
                break;
            case "KeyF":
                return InputEnum.NONE
                break;
            default:
                return InputEnum.NONE
                break;
        }
    }

    off(){

    }
}
import { Controller } from "./controller/Controller.js";
/**
 * 用户输入行为类
 */
export declare abstract class Input {
    protected controller: Controller;
    constructor(controller: Controller);
    abstract listen(): void;
    abstract off(): void;
}
export declare class KeyboardInput extends Input {
    constructor(controller: Controller);
    listen(): void;
    off(): void;
}

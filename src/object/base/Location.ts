import {game} from "../../index.js";

export class Location {
    x: number;
    y: number;
    constructor(x?:number,y?:number) {
        if (x && y){
            this.x = x;
            this.y = y;
        }else{
            //默认出现在场景最中间吧.好发现有东西画错了
            this.x = game.scene.size.width/2
            this.y = game.scene.size.height/2

        }
    }
}

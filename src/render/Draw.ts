import {Entity} from "../object/interface/Entity.js";
import {Bullet} from "../object/game/tank/Bullet.js";
import {game} from "../index.js";
import {TankEnum} from "../object/game/tank/Tank";

export interface Draw {
    draw (entity:Entity):void
}


export class DrawBullet implements Draw{
    draw (bullet:Bullet):void {
        let ctx = game.ctx
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;

        let y = bullet.location.y
        let x = bullet.location.x

        // 绘制三角形路径
        ctx.beginPath();
        ctx.moveTo(x, y);  // 移动到起始点（x, y）
        ctx.lineTo(x-2, y+4);  // 绘制到第一个顶点（x, y）
        ctx.lineTo(x+2, y+4); // 绘制到第二个顶点（x, y）
        ctx.closePath();     // 封闭路径
        ctx.fill();          // 填充三角形
        ctx.stroke();        // 绘制三角形边框
    }
}
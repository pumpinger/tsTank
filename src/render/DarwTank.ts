import {game} from "../index.js";
import {Tank, TankEnum} from "../object/game/tank/Tank.js";

export class DarwTank {
    draw (tank:Tank){
        let ctx = game.ctx
        if (ctx){
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 2;
            console.log(tank.location)

            switch (tank.type){
                case TankEnum.FAST:
                    ctx.fillStyle = "red";
                    break;
                case TankEnum.HEAVY:
                    ctx.fillStyle = "black";
                    break;
                default:
                    break;
            }

            let x  =  tank.location.x
            let y = tank.location.y

            // 绘制三角形路径
            ctx.beginPath();
            ctx.moveTo(x, y);  // 移动到起始点（x, y）
            ctx.lineTo(x-10, y+30);  // 绘制到第一个顶点（x, y）
            ctx.lineTo(x+10, y+30); // 绘制到第二个顶点（x, y）
            ctx.closePath();     // 封闭路径
            ctx.fill();          // 填充三角形
            ctx.stroke();        // 绘制三角形边框
        }
    }
}
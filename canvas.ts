import {Entity} from "./Entity";


let createCanvas = (canvas:any,scenceEntity:Entity)=>{
    let ctx = canvas.getContext("2d");
    canvas.width = scenceEntity.width;
    canvas.height = scenceEntity.height;


    //

    ctx.moveTo(50, 50);
    ctx.lineTo(80, 50);
    ctx.lineWidth = 10; // 线条宽度
    ctx.strokeStyle = "orangered";  // 线条颜色
    ctx.lineCap = "round";  // 线条样式
    ctx.stroke();
}


export {
    createCanvas
}


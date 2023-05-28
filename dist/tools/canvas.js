var createCanvas = function (canvas, scenceEntity) {
    var ctx;
    ctx = canvas.getContext("2d");
    canvas.width = scenceEntity.width;
    canvas.height = scenceEntity.height;
    return ctx;
    // ctx.moveTo(50, 50);
    // ctx.lineTo(80, 50);
    // ctx.lineWidth = 10; // 线条宽度
    // ctx.strokeStyle = "orangered";  // 线条颜色
    // ctx.lineCap = "round";  // 线条样式
    // ctx.stroke();
};
export { createCanvas };

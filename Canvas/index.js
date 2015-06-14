var drawing = document.getElementById('draw');
if (drawing.getContext) {
    var context = drawing.getContext("2d");

    //填充矩形
/*    context.fillStyle = "#ff0000";
    context.fillRect(10, 10, 50, 50);

    context.fillStyle = "rgba(0,0,255,0.5)";
    context.fillRect(30, 30, 50, 50);

    //描边矩形
    context.strokeStyle="#ff0000";
    context.strokeRect(10,50,50,50);

    context.strokeStyle="rgba(0,0,255,0.5)";
    context.strokeRect(30,70,50,50);*/

    //表针
    /*context.beginPath();

    context.arc(100,100,99,0,2*Math.PI,false);

    context.moveTo(194,100);
    context.arc(100,100,94,0,2*Math.PI,false);

    context.moveTo(100,100);
    context.lineTo(100,15);

    context.moveTo(100,100);
    context.lineTo(35,100);

    // context.fill();
    context.stroke();

    context.font = "bold 14px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("12",100,20);*/

    context.beginPath();
    context.translate(100,100);
    context.arc(0,0,99,0,2*Math.PI,false);
    context.moveTo(94,0);
    context.arc(0,0,94,0,2*Math.PI,false);

    context.rotate(1);
    context.moveTo(0,0);
    context.lineTo(0,-85);
    context.moveTo(0,0);
    context.lineTo(-65,0);
    context.stroke();
}

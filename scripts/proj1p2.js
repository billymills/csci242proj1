window.onload = init;

function init() {
	var canvasDiv = document.getElementById("canvasDiv");
	canvasDiv.innerHTML = "<canvas width='600' height='500' id='myCanvas'></canvas>";
	var myCanvas = document.getElementById("myCanvas");
	var myCanvasContext = myCanvas.getContext("2d");
	drawGrid(myCanvas, myCanvasContext);
}

function drawGrid(myCanvas, myCtx) {
//var and for loop to draw vertical lines
var x = 120;
for(i=0; i<4; i++) {
	myCtx.beginPath();
	myCtx.moveTo(x,0);
	myCtx.lineTo(x,500);
	myCtx.stroke();
	x = x+120;
}; //end for loop

//var and for loop to draw horizontal lines
var y = 50;
for(i=0; i<10; i++) {
	myCtx.beginPath();
	myCtx.moveTo(0,y);
	myCtx.lineTo(600,y);
	myCtx.stroke();
	y = y + 50;
}; //end for loop
	
}